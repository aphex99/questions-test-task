import { useState } from "react";
import { Link } from "react-router-dom";

import { useGetQuestionsQuery } from "@/pages/questions/api/questionsApi.ts";

import { routes } from "@/shared/config";
import { getErrorMessage } from "@/shared/lib/errors";
import { EmptyState, ErrorMessage, Pagination } from "@/shared/ui";

interface QuestionsListProps {
  limit: number;
}

const QuestionsList = ({ limit }: QuestionsListProps) => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useGetQuestionsQuery({ page, limit });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} />;
  }

  if (data && data.data.length === 0) {
    return <EmptyState title={"No one question found"} />;
  }

  return (
    <div>
      <h1>Questions list</h1>
      <ul>
        {data?.data.map((q) => (
          <li key={q.id}>
            <p>{q.title}</p>
            <Link to={routes.question(q.id)}>Check question</Link>
          </li>
        ))}
      </ul>
      <Pagination page={page} limit={limit} total={data?.total} setPage={setPage} />
    </div>
  );
};

export default QuestionsList;
