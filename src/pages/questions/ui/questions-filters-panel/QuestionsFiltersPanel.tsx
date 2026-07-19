import { lazy, Suspense } from "react";

import { SearchQuestion } from "@/features";
import { Complexity, Rate, Status } from "@/features/filters";

import { SkeletonFilterChips } from "@/shared/ui/skeletons/skeleton-filter-chips";

import { useResetPage } from "./model/useResetPage.ts";

import styles from "./QuestionsFiltersPanel.module.scss";

const Specialization = lazy(() => import("@/features/filters/specialization"));
const Skill = lazy(() => import("@/features/filters/skill"));

const QuestionsFiltersPanel = () => {
  const resetPage = useResetPage();

  return (
    <section className={styles.wrapper}>
      <SearchQuestion resetPage={resetPage} />
      <Suspense fallback={<SkeletonFilterChips />}>
        <Specialization resetPage={resetPage} />
      </Suspense>
      <Suspense fallback={<SkeletonFilterChips />}>
        <Skill resetPage={resetPage} />
      </Suspense>
      <Complexity resetPage={resetPage} />
      <Rate resetPage={resetPage} />
      <Status />
    </section>
  );
};

export default QuestionsFiltersPanel;
