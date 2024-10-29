import styles from "./styles.module.css";
import type { ParagraphConstructorRow } from "../../api/types";

interface RowProps {
  data: ParagraphConstructorRow;
}

export const Row = ({ data }: RowProps) => {
  const rowClassName = data.accentColor ? styles[data.accentColor] : "";

  if (data.isTag) {
    return <span className={rowClassName}>&lt;{data.text}&gt;</span>;
  }

  if (data.accentSubstring) {
    const [firstChunk, lastChunk] = data.text.split(data.accentSubstring);

    return (
      <span>
        {firstChunk}
        <span className={rowClassName}>{data.accentSubstring}</span>
        {lastChunk}
      </span>
    );
  }

  return <span>{data.text}</span>;
};
