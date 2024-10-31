import styles from "./styles.module.css";
import Link from "next/link";

import HabrIcon from "../../lib/icons/habr.svg";
import TelegramIcon from "../../lib/icons/telegram.svg";
import GmailIcon from "../../lib/icons/gmail.svg";

export const DockPanel = () => {
  return (
    <div className={styles.dock}>
      <div className={styles.dockItem}>_get in touch</div>
      <Link
        className={styles.dockItem}
        href={"https://t.me/ivanstrilets"}
        target="_blank"
      >
        <TelegramIcon />
      </Link>
      <Link
        className={styles.dockItem}
        href={"mailto:ivanstrilets@gmail.com"}
        target="_blank"
      >
        <GmailIcon />
      </Link>
      <Link
        className={styles.dockItem}
        href={"https://career.habr.com/ivan-strilets"}
        target="_blank"
      >
        <HabrIcon />
      </Link>
      <div className={styles.placeholder} />
    </div>
  );
};
