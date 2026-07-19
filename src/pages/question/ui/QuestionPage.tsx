import { Navigate, useNavigate, useParams } from "react-router-dom";

import { QuestionPageSidePanel } from "@/pages/question/ui/question-page-side-panel";

import { ArrowLeftIcon } from "@/shared/assets";
import { getErrorMessage } from "@/shared/lib/errors";
import { Button, EmptyState, ErrorMessage } from "@/shared/ui";

import { useGetQuestionQuery } from "../api/questionApi.ts";
import { useQuestionNavigation } from "../model/useQuestionNavigation.ts";
import { QuestionPageContent } from "../ui/question-page-content";

import styles from "./QuestionPage.module.scss";

export const QuestionPage = () => {
  const { id } = useParams();
  const questionId = Number(id);

  const navigate = useNavigate();

  if (!id || Number.isNaN(questionId)) {
    return <Navigate to={"/questions"} replace />;
  }

  const { data, error, isLoading, refetch } = useGetQuestionQuery(questionId);
  const navigation = useQuestionNavigation();

  const navigateBack = () => {
    navigate(`/?page=${navigation.currentPage}`);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} />;
  }

  if (data && !data.title) {
    return <EmptyState title={"The question wasn't found"} />;
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

  return (
    <div className={styles.wrapper}>
      <Button className={styles.buttonBack} onClick={navigateBack}>
        <ArrowLeftIcon />
        <span>Назад</span>
      </Button>
      <div className={styles.mainContainer}>
        {!data.title ? (
          <EmptyState
            title={"Вопрос не найден"}
            message={"Выберите другой вопрос"}
            isOneQuestion={true}
            className={styles.emptyStateCard}
          />
        ) : (
          <>
            <QuestionPageContent
              description={data.description}
              longAnswer={data.longAnswer}
              navigation={navigation}
              shortAnswer={data.shortAnswer}
              title={data.title}
            />
            <QuestionPageSidePanel
              questionSkills={data.questionSkills}
              rate={data.rate}
              complexity={data.complexity}
              username={data.createdBy.username}
              keywords={data.keywords}
            />
          </>
        )}
      </div>
    </div>
  );
};
