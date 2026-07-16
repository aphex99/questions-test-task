import { Navigate, useParams } from "react-router-dom";

import { useGetQuestionQuery } from "@/pages/question/api/questionApi.ts";

import { getErrorMessage } from "@/shared/lib/errors";
import { EmptyState, ErrorMessage } from "@/shared/ui";

export const QuestionPage = () => {
  const { id } = useParams();
  const questionId = Number(id);

  if (!id || Number.isNaN(questionId)) {
    return <Navigate to={"/questions"} replace />;
  }

  const { data, error, isLoading } = useGetQuestionQuery(questionId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} />;
  }

  if (data && !data.title) {
    return <EmptyState title={"The question wasn't found"} />;
  }

  return (
    <div>
      <p>{data?.title}</p>
    </div>
  );
};
