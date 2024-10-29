import styles from "./styles.module.css";

interface HelloSubtitleProps {
  text: string;
  isAccented?: boolean;
}

export const HelloSubtitle = ({ text, isAccented }: HelloSubtitleProps) => {
  return (
    <p className={isAccented ? styles.subtitleAccent : styles.subtitle}>
      {text}
    </p>
  );
};
