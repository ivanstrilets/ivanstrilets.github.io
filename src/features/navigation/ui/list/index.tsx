import styles from "./styles.module.css";

interface NavigationListProps {
  children?: React.ReactNode;
}

export const NavigationList = ({ children }: NavigationListProps) => {
  return (
    <nav>
      <ul className={styles.list}>{children}</ul>
    </nav>
  );
};
