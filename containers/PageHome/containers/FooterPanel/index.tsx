import cx from "classnames";
import * as React from "react";

import { NEXT_PUBLIC_NETWORK } from "../../../../config/client";

import { TEIKI_CONNECTION_LIST } from "./constants/teiki-connection-list";
import styles from "./index.module.scss";

import { LogoTeikiFull } from "@/modules/teiki-logos";
import Divider from "@/modules/teiki-ui/components/Divider";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const FooterPanel = ({ className, style }: Props) => {
  return (
    <div className={cx(className, styles.container)} style={style}>
      <div className={styles.upperContainer}>
        <div className={styles.teiki}>
          <div className={styles.logo}>
            <LogoTeikiFull
              color="white-with-green-initial"
              network={NEXT_PUBLIC_NETWORK}
            />
          </div>
          <Divider.Vertical />
          <div className={styles.slogan}>Simply Grow.</div>
        </div>
        <div className={styles.iconList}>
          {TEIKI_CONNECTION_LIST.map(
            ({ icon, url }: { icon: React.ReactNode; url: string }, index) => {
              return (
                <a href={url} key={index} target="_blank" rel="noreferrer">
                  <div className={styles.iconContainer}>{icon}</div>
                </a>
              );
            }
          )}
        </div>
      </div>
      <Divider.Horizontal color="white-05" />
      <div className={styles.lowerContainer}>
        <div>© 2023 Shinka Network</div>
        <div className={styles.routingPage}>
          <a
            className={styles.routingPageItem}
            href="https://discord.io/teikinetwork"
            target="_blank"
            rel="noreferrer"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterPanel;
