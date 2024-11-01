import { DockIcon } from "../icon";
import styles from "./styles.module.css";
import Link from "next/link";

export const DockPanel = () => {
  return (
    <div className={styles.dock}>
      <div className={styles.dockItem}>_get in touch</div>
      <Link
        className={styles.dockItem}
        href={"https://t.me/ivanstrilets"}
        target="_blank"
      >
        <DockIcon icon="telegram" />
      </Link>
      <Link
        className={styles.dockItem}
        href={"mailto:ivanstrilets@gmail.com"}
        target="_blank"
      >
        <DockIcon icon="gmail" />
      </Link>
      <Link
        className={styles.dockItem}
        href={"https://career.habr.com/ivan-strilets"}
        target="_blank"
      >
        <DockIcon icon="habr" />
      </Link>
      <div className={styles.placeholder} />
    </div>
  );
};
