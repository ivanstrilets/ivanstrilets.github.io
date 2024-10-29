import styles from "./styles.module.css";

interface NavigationTabProps {
  label: string;
  value: number;
  isActive?: boolean;
  onClick: (value: number) => void;
}

export const NavigationTab = ({
  label,
  value,
  isActive,
  onClick,
}: NavigationTabProps) => {
  return (
    <li className={isActive ? styles.tabActive : styles.tab}>
      <button className={styles.button} onClick={() => onClick(value)}>
        {label}
      </button>
    </li>
  );
};
