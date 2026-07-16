import type { Question } from "@/entities/question";

import { Pagination } from "@/shared/ui";

import { QuestionCard } from "./question-card";

import styles from "./QuestionsList.module.scss";

interface QuestionsListProps {
  limit: number;
  page: number;
  totalCount: number;
  questions: Question[];
  onChangePage: (page: number) => void;
}

const QuestionsList = ({
  limit,
  page,
  totalCount,
  questions,
  onChangePage,
}: QuestionsListProps) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainTitle}>Вопросы React, JavaScript</h1>
      <ul className={styles.list}>
        {questions.map((question) => (
          <li key={question.id} className={styles.item}>
            <QuestionCard title={question.title} />
          </li>
        ))}
      </ul>
      <Pagination page={page} limit={limit} total={totalCount} setPage={onChangePage} />
    </div>
  );
};

export default QuestionsList;
