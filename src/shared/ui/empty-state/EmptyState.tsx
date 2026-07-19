import { useDispatch } from "react-redux";

import { resetFilters } from "@/shared/model/questionsFilters";
import { Button, CardWrapper } from "@/shared/ui";

interface EmptyStateProps {
  className?: string;
  message?: string;
  isOneQuestion?: boolean;
  title?: string;
  resetSearchFilters?: boolean;
}

import styles from "./EmptyState.module.scss";

export const EmptyState = ({
  className,
  isOneQuestion,
  message,
  title,
  resetSearchFilters,
}: EmptyStateProps) => {
  const dispatch = useDispatch();
  const onResetFilters = () => {
    dispatch(resetFilters());
  };
  return isOneQuestion ? (
    <CardWrapper className={className}>
      <h2>{title}</h2>
      <p className={styles.text}>{message}</p>
    </CardWrapper>
  ) : (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{message}</p>
      {resetSearchFilters && (
        <Button className={styles.button} onClick={onResetFilters}>
          Сбросить фильтры
        </Button>
      )}
    </div>
  );
};
