import { SearchQuestion } from "@/features";

import styles from "./QuestionsFiltersPanel.module.scss";

export const QuestionsFiltersPanel = () => {
  return (
    <section className={styles.wrapper}>
      <SearchQuestion />
    </section>
  );
};
