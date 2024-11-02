import styles from "./styles.module.css";
import type { ParagraphConstructorRow } from "../api/types";
import { Row } from "./row";

interface ParagraphConstructorProps {
  rows: ParagraphConstructorRow[];
}

export const ParagraphConstructor = ({ rows }: ParagraphConstructorProps) => {
  return (
    <p className={styles.paragraph}>
      {rows.map((row, rowIndex) => {
        return <Row key={rowIndex} data={row} />;
      })}
    </p>
  );
};
