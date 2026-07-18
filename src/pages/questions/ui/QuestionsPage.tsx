import { useSearchParams } from "react-router-dom";

import { QuestionsFiltersPanel } from "@/pages/questions";
import { useGetQuestionsQuery } from "@/pages/questions/api/questionsApi.ts";
import { COUNT_PER_PAGE } from "@/pages/questions/config/consts.ts";

import { QuestionsList } from "@/widgets";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppSelector } from "@/shared/lib/redux";
import { selectQuestionsFilters } from "@/shared/model/questionsFilters/model";
import { ErrorMessage } from "@/shared/ui";

import styles from "./QuestionsPage.module.scss";

export const QuestionsPage = () => {
  const filters = useAppSelector(selectQuestionsFilters);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data, error, isLoading } = useGetQuestionsQuery({ ...filters, page });

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
