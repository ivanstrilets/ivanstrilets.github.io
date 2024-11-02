import { DockIcon } from "../icon";
import type { Icon } from "../icon";
import styles from "./styles.module.css";
import Link from "next/link";

const links = [
  {
    name: "telegram",
    href: "https://t.me/ivanstrilets",
  },
  {
    name: "gmail",
    href: "mailto:ivanstrilets@gmail.com",
  },
  {
    name: "habr",
    href: "https://career.habr.com/ivan-strilets",
  },
];

export const DockPanel = () => {
  return (
    <div className={styles.dock}>
      <div className={styles.dockItem}>_get in touch</div>
      {links.map(({ name, href }, index) => (
        <Link
          key={index}
          className={styles.dockItem}
          href={href}
          target="_blank"
        >
          <DockIcon icon={name as Icon} />
        </Link>
      ))}
      <div className={styles.placeholder} />
    </div>
  );
};
