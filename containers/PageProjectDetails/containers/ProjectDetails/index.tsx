import cx from "classnames";
import * as React from "react";

import TabControl from "./components/TabControl";
import FAQs from "./containers/FAQs";
import TabActivities from "./containers/TabActivities";
import TabMilestoneCard from "./containers/TabMilestoneCard";
import TabUpdates from "./containers/TabUpdates";
import styles from "./index.module.scss";

import {
  ProjectAnnouncement,
  ProjectCommunity,
  ProjectDescription,
  ProjectMilestone,
  ProjectRoadmap,
} from "@/modules/business-types";
import { ProjectActivity } from "@/modules/business-types";
import RichTextEditor from "@/modules/teiki-components/components/RichTextEditor";

type Props = {
  className?: string;
  projectId: string;
  description: ProjectDescription;
  roadmap: ProjectRoadmap;
  community: ProjectCommunity;
  announcements: ProjectAnnouncement[];
  activities: ProjectActivity[];
  activeTabIndex: number;
  onChangeActiveTabIndex: (value: number) => void;
};

export const TABS = [
  { title: "Campaign", hash: "#campaign" },
  { title: "Roadmap", hash: "#roadmap" },
  { title: "Announcements", hash: "#announcements" },
  { title: "FAQs", hash: "#faqs" },
  { title: "Activities", hash: "#activities" },
];

export default function ProjectDetails({
  className,
  projectId,
  description,
  roadmap,
  community,
  announcements,
  activities,
  activeTabIndex,
  onChangeActiveTabIndex,
}: Props) {
  return (
    <div className={cx(className, styles.container)}>
      <TabControl
        tabs={TABS}
        value={activeTabIndex}
        onChange={onChangeActiveTabIndex}
      />
      {activeTabIndex == 0 ? ( // Campaign
        <div className={styles.richTextEditorContainer}>
          <RichTextEditor
            /**NOTE: @sk-tenba: setting key to projectId make the component rerender when the route changes */
            key={projectId}
            value={description.body}
            className={styles.richTextEditor}
          />
        </div>
      ) : activeTabIndex == 1 ? ( // Roadmaps
        <div className={styles.roadmapMain} key={projectId}>
          {roadmap.map((milestone: ProjectMilestone, index: number) => (
            <TabMilestoneCard {...milestone} key={index} />
          ))}
        </div>
      ) : activeTabIndex == 2 ? ( // Announcements
        <TabUpdates key={projectId} value={announcements} />
      ) : activeTabIndex == 3 ? ( // FAQs
        <FAQs key={projectId} faqs={community.frequentlyAskedQuestions} />
      ) : activeTabIndex === 4 ? ( // TODO: Activities
        <TabActivities
          key={projectId}
          value={activities}
          projectId={projectId}
        />
      ) : null}
    </div>
  );
}
