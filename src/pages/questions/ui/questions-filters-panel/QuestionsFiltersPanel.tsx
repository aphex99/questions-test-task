import { SearchQuestion } from "@/features";
import { Complexity, Rate, Skill, Specialization, Status } from "@/features/filters";

import styles from "./QuestionsFiltersPanel.module.scss";

export const QuestionsFiltersPanel = () => {
  return (
    <section className={styles.wrapper}>
      <SearchQuestion />
      <Specialization />
      <Skill />
      <Complexity />
      <Rate />
      <Status />
    </section>
  );
};
