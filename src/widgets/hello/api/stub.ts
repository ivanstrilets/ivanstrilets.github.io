import type { ParagraphConstructorRow } from "@/shared/paragraphConstructor";

export const aboutTextStub: ParagraphConstructorRow[] = [
  {
    text: "приветствие",
    accentSubstring: "",
    accentColor: "yellow",
    isTag: true,
  },
  {
    text: "Привет, меня зовут Иван() }",
    accentSubstring: "Иван",
    accentColor: "green",
    isTag: false,
  },
  {
    text: "Я ведущий веб инженер",
    accentSubstring: "веб инженер",
    accentColor: "purple",
    isTag: false,
  },
  {
    text: "Работал с большим количеством проектов",
    accentSubstring: "проектов",
    accentColor: "blue",
    isTag: false,
  },
  {
    text: "используя современные технологнии",
    accentSubstring: "современные технологнии",
    accentColor: "red",
    isTag: false,
  },
  {
    text: "и дизайн",
    accentSubstring: "дизайн",
    accentColor: "blue",
    isTag: false,
  },
  {
    text: "}",
    accentSubstring: "",
    accentColor: "",
    isTag: false,
  },
];
