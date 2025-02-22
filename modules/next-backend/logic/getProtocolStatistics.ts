import { Sql } from "../db";

import { ProtocolStatistics } from "@/modules/business-types";

// TODO: Should we put this into an materialized view
export async function getProtocolStatistics(
  sql: Sql
): Promise<ProtocolStatistics> {
  const result = await sql`
    SELECT
      (
        SELECT count(ps.project_id) FROM views.project_summary ps
      ) project_count,
      (
        SELECT count(DISTINCT b.backer_address) FROM chain.backing b
      ) backer_count,
      (
        SELECT count(ps.project_id) FROM views.project_summary ps
        WHERE status NOT IN ('delisted', 'closed')
      ) active_project_count,
      (
        SELECT
          count(DISTINCT b.backer_address)
        FROM
          chain.backing b
          INNER JOIN chain.output o ON o.id = b.id
        WHERE
          o.spent_slot IS NULL
          AND EXISTS (
            SELECT
            FROM
              views.project_summary ps
            WHERE
              ps.status NOT IN ('delisted', 'closed')
              AND b.project_id = ps.project_id
          )
      ) active_backer_count,
      (
        SELECT
          sum(ps.total_staking_amount)
        FROM
          views.project_summary ps
      ) total_active_stake,
      (
        SELECT sum(total_raised_funds) FROM views.project_summary
      ) total_raised,
      (
        (
          SELECT
            EXTRACT (
              EPOCH
              FROM
                (current_timestamp - MIN(ps.created_time))
            )
          FROM
            views.project_summary ps
        ) / (
          SELECT
            COUNT(
              DISTINCT (pd.project_id, pd.last_announcement_cid)
            )
          FROM
            chain.project_detail pd
        ) * 1000
      ) average_milliseconds_between_project_updates
  `;
  const [stats] = result;

  return {
    numLovelaceRaised: stats.totalRaised,
    numProjects: stats.projectCount,
    numSupporters: stats.backerCount,
    numLovelaceStakedActive: stats.totalActiveStake,
    numProjectsActive: stats.activeProjectCount,
    numSupportersActive: stats.activeBackerCount,
    averageMillisecondsBetweenProjectUpdates:
      stats.averageMillisecondsBetweenProjectUpdates,
  };
}
