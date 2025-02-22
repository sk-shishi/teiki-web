import cx from "classnames";
import Link from "next/link";
import * as React from "react";

import { formatScope, ProjectActivityAction } from "@/modules/business-types";
import { getExplorerUrl } from "@/modules/common-utils";
import { useTxParams$CreatorCreateProject } from "@/modules/next-backend-client/hooks/useTxParams$CreatorCreateProject";
import AssetViewer from "@/modules/teiki-ui/components/AssetViewer";
import InlineAddress from "@/modules/teiki-ui/components/InlineAddress";
import Typography from "@/modules/teiki-ui/components/Typography";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  value: ProjectActivityAction;
};

export default function ActivityAction({ className, style, value }: Props) {
  const txParamsResult = useTxParams$CreatorCreateProject();
  switch (value.type) {
    case "back":
      return (
        <Typography.Div maxLines={2} className={className} style={style}>
          <Typography.Span size="heading6">
            <InlineAddress value={value.createdBy} length="short" />
          </Typography.Span>
          <Typography.Span
            color="ink80"
            size="bodySmall"
            lineHeight="medium"
            content=" backed "
          />
          <Typography.Span size="heading6" color="green">
            <AssetViewer.Ada.Standard
              as="span"
              lovelaceAmount={value.lovelaceAmount}
            />
          </Typography.Span>
          <Link href={getExplorerUrl(value.createdTx)} target="_blank">
            <Typography.Span
              content="View transaction"
              size="heading6"
              style={{
                color: "#00362C",
                textDecoration: "underline",
                marginLeft: "8px",
              }}
            />
          </Link>
        </Typography.Div>
      );

    case "unback":
      return (
        <Typography.Div maxLines={2} className={className} style={style}>
          <Typography.Span size="heading6">
            <InlineAddress value={value.createdBy} length="short" />
          </Typography.Span>
          <Typography.Span
            color="ink80"
            size="bodySmall"
            lineHeight="medium"
            content=" unbacked "
          />
          <Typography.Span size="heading6">
            <AssetViewer.Ada.Standard
              as="span"
              lovelaceAmount={value.lovelaceAmount}
            />
          </Typography.Span>
          <Link href={getExplorerUrl(value.createdTx)} target="_blank">
            <Typography.Span
              content="View transaction"
              size="heading6"
              style={{
                color: "#00362C",
                textDecoration: "underline",
                marginLeft: "8px",
              }}
            />
          </Link>
        </Typography.Div>
      );

    case "announcement":
      return (
        <Typography.Div
          maxLines={2}
          className={cx(className)}
          style={style}
          title={`${value.projectTitle} posted an announcement: ${value.title}`}
        >
          <Typography.Span size="heading6" content={value.projectTitle} />
          <Typography.Span
            size="bodySmall"
            content=" posted an "
            lineHeight="medium"
            color="ink80"
          />
          <Typography.Span
            size="heading6"
            content={"announcement: " + value.title}
          />
        </Typography.Div>
      );

    case "project_update":
      return (
        <Typography.Div
          maxLines={2}
          className={className}
          style={style}
          title={`${value.projectTitle} updated ${value.scope
            .map(formatScope)
            .join(", ")}`}
        >
          <Typography.Span size="heading6" content={value.projectTitle} />
          <Typography.Span
            size="bodySmall"
            lineHeight="medium"
            content=" updated "
            color="ink80"
          />
          <Typography.Span
            size="heading6"
            content={value.scope.map(formatScope).join(", ")}
          />
        </Typography.Div>
      );

    case "protocol_milestone_reached":
      return (
        <Typography.Div maxLines={2} className={className} style={style}>
          <Typography.Span size="heading6" content={value.projectTitle} />
          <Typography.Span
            size="bodySmall"
            lineHeight="medium"
            content=" reached "
            color="ink80"
          />
          <Typography.Span
            size="heading6"
            content={`Protocol Landmark ${value.milestonesSnapshot} (over ${
              txParamsResult != null && txParamsResult.error == null
                ? (
                    Number(
                      txParamsResult.computed.protocolParams.projectMilestones[
                        value.milestonesSnapshot - 1
                      ]
                    ) / 1000000
                  ).toLocaleString()
                : "-"
            } ADA raised)`}
          />
        </Typography.Div>
      );
  }
}
