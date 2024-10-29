import styles from "./styles.module.css";
import { HelloSubtitle } from "./subtitle";
import { HelloTitle } from "./title";
import { aboutTextStub } from "../api/stub";

import { ParagraphConstructor } from "@/shared/paragraphConstructor";

export const Hello = () => {
  return (
    <section className={styles.hello}>
      <div className={styles.title}>
        <HelloTitle text="Иван Стрилец" />
        <HelloSubtitle text="//Делаю работу" />
        <HelloSubtitle text="Качественно" isAccented />
      </div>
      <div className={styles.text}>
        <ParagraphConstructor rows={aboutTextStub} />
      </div>
    </section>
  );
};
