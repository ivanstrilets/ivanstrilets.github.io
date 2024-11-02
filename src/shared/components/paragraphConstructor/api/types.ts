type ParagraphConstructorRowColor =
  | ""
  | "yellow"
  | "purple"
  | "red"
  | "blue"
  | "green";

export type ParagraphConstructorRow = {
  text: string;
  isTag: boolean;
  accentSubstring: string;
  accentColor: ParagraphConstructorRowColor;
};
