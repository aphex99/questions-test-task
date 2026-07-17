import type { Question } from "@/entities/question";

import { EmptyState, Pagination } from "@/shared/ui";

import { QuestionCard } from "./question-card";

import styles from "./QuestionsList.module.scss";

interface QuestionsListProps {
  data: Question[];
  limit: number;
  page: number;
  totalCount: number;
  onChangePage: (page: number) => void;
}

const QuestionsList = ({ data, limit, page, totalCount, onChangePage }: QuestionsListProps) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainTitle}>Вопросы React, JavaScript</h1>

      {data.length === 0 ? (
        <EmptyState title={"No one question found"} />
      ) : (
        <>
          <ul className={styles.list}>
            {data.map((question) => (
              <li key={question.id} className={styles.item}>
                <QuestionCard title={question.title} />
              </li>
            ))}
          </ul>
          <Pagination page={page} limit={limit} total={totalCount} setPage={onChangePage} />
        </>
      )}
    </div>
  );
};

export default QuestionsList;
