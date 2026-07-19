import type { Question } from "@/entities/question";

import { CardWrapper, EmptyState, Pagination } from "@/shared/ui";

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
    <CardWrapper>
      <div className={styles.wrapper}>
        <h1 className={styles.mainTitle}>Вопросы React, JavaScript</h1>

        {data.length === 0 ? (
          <EmptyState
            title={"Вопросы не найдены"}
            message={"Измените фильтры или сбросьте их"}
            resetSearchFilters={true}
          />
        ) : (
          <>
            <ul className={styles.list}>
              {data.map((question) => (
                <li key={question.id} className={styles.item}>
                  <QuestionCard
                    complexity={question.complexity}
                    page={page}
                    rate={question.rate}
                    title={question.title}
                    imageSrc={question.imageSrc}
                    shortAnswer={question.shortAnswer}
                    id={question.id}
                  />
                </li>
              ))}
            </ul>

            <Pagination page={page} limit={limit} total={totalCount} setPage={onChangePage} />
          </>
        )}
      </div>
    </CardWrapper>
  );
};

export default QuestionsList;
