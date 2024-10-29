import styles from "./styles.module.css";

interface HelloTitleProps {
  text: string;
}

export const HelloTitle = ({ text }: HelloTitleProps) => {
  const titleChunks = text.split(" ");

  return (
    <h1 className={styles.title}>
      &lt;
      {titleChunks.map((chunk, chunkIndex) => (
        <span key={chunkIndex}>
          {chunk}
          {chunkIndex < titleChunks.length - 1 && <br />}
        </span>
      ))}
      &gt;
    </h1>
  );
};
