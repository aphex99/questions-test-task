import { lazy } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetQuestionsQuery } from "@/pages/questions";
import { COUNT_PER_PAGE } from "@/pages/questions/config/consts.ts";

import { QuestionsList } from "@/widgets";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppSelector } from "@/shared/lib/redux";
import { selectQuestionsFilters } from "@/shared/model/questionsFilters/model";
import { ErrorMessage } from "@/shared/ui";
import { SkeletonQuestionsPage } from "@/shared/ui/skeletons/skeleton-questions-page";

import styles from "./QuestionsPage.module.scss";

const QuestionsFiltersPanel = lazy(() => import("./questions-filters-panel"));

const QuestionsPage = () => {
  const filters = useAppSelector(selectQuestionsFilters);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading, refetch } = useGetQuestionsQuery({ ...filters, page });

  if (isLoading) {
    return <SkeletonQuestionsPage />;
  }

  if (error) {
    return <ErrorMessage title={getErrorMessage(error)} onRetry={refetch} />;
  }

  if (!data) {
    return (
      <ErrorMessage
        title={"Something went wrong"}
        message={"No data received."}
        onRetry={refetch}
      />
    );
  }

  const onChangePage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <section className={styles.wrapper}>
      <QuestionsList
        limit={COUNT_PER_PAGE}
        page={page}
        data={data.data}
        totalCount={data.total}
        onChangePage={onChangePage}
      />
      <QuestionsFiltersPanel />
    </section>
  );
};

export default QuestionsPage;
