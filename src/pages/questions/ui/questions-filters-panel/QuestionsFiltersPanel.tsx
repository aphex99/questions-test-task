import { SearchQuestion } from "@/features";
import { Complexity, Rate, Skill, Specialization, Status } from "@/features/filters";

import { useResetPage } from "./model/useResetPage.ts";

import styles from "./QuestionsFiltersPanel.module.scss";

export const QuestionsFiltersPanel = () => {
  const resetPage = useResetPage();

  return (
    <section className={styles.wrapper}>
      <SearchQuestion resetPage={resetPage} />
      <Specialization resetPage={resetPage} />
      <Skill resetPage={resetPage} />
      <Complexity resetPage={resetPage} />
      <Rate resetPage={resetPage} />
      <Status />
    </section>
  );
};
