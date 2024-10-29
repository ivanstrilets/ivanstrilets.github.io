import styles from "./styles.module.css";
import type { ParagraphConstructorRow } from "../api/types";

interface ParagraphConstructorProps {
  rows: ParagraphConstructorRow[];
}

const createRow = (row: ParagraphConstructorRow) => {
  const rowClassName = row.accentColor ? styles[row.accentColor] : "";

  if (row.isTag) {
    return <span className={rowClassName}>&lt;{row.text}&gt;</span>;
  }

  if (row.accentSubstring) {
    const [firstChunk, lastChunk] = row.text.split(row.accentSubstring);

    return (
      <span>
        {firstChunk}
        <span className={rowClassName}>{row.accentSubstring}</span>
        {lastChunk}
      </span>
    );
  }

  return <span>{row.text}</span>;
};

export const ParagraphConstructor = ({ rows }: ParagraphConstructorProps) => {
  return (
    <p className={styles.paragraph}>
      {rows.map((row, rowIndex) => {
        return <span key={rowIndex}>{createRow(row)}</span>;
      })}
    </p>
  );
};
