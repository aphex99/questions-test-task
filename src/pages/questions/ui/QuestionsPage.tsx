import { useGetQuestionsQuery } from "@/pages/questions/api/questionsApi.ts";
import { COUNT_PER_PAGE } from "@/pages/questions/config/consts.ts";
import { QuestionsFiltersPanel } from "@/pages/questions/ui/questions-filters-panel";

import { QuestionsList } from "@/widgets";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { selectQuestionsFilters, setPage } from "@/shared/model/questionsFilters/model";
import { ErrorMessage } from "@/shared/ui";

import styles from "./QuestionsPage.module.scss";

export const QuestionsPage = () => {
  const filters = useAppSelector(selectQuestionsFilters);
  const dispatch = useAppDispatch();
  const { page } = filters;

  const { data, error, isLoading } = useGetQuestionsQuery(filters);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} />;
  }

  if (!data) {
    return null;
  }

  const onChangePage = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <section className={styles.wrapper}>
      <QuestionsList
        limit={COUNT_PER_PAGE}
        page={page}
        data={data.data}
        totalCount={data?.total}
        onChangePage={onChangePage}
      />
      <QuestionsFiltersPanel />
    </section>
  );
};
