import { useState } from "react";

import clsx from "clsx";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { selectSpecializationId, setSpecialization } from "@/shared/model/questionsFilters/model";
import { Button, ErrorMessage, FilterChip } from "@/shared/ui";
import { SkeletonFilterChips } from "@/shared/ui/skeletons/skeleton-filter-chips";

import { useGetSpecializationsQuery } from "./api/specializationsApi.ts";

import styles from "./Specialization.module.scss";

interface SpecializationProps {
  resetPage: () => void;
}

const Specialization = ({ resetPage }: SpecializationProps) => {
  const specializationId = useAppSelector(selectSpecializationId);
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(false);
  const { data, error, isLoading, refetch } = useGetSpecializationsQuery();

  if (isLoading) {
    return <SkeletonFilterChips />;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} onRetry={refetch} />;
  }

  const onSetSpecialization = (id: number) => {
    dispatch(setSpecialization(id));
    resetPage();
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Специализация</h4>
      {!data ? (
        <span>Нет специализаций</span>
      ) : (
        <>
          <ul className={clsx(styles.list, { [styles.expanded]: expanded })}>
            {data.data.map((spec) => (
              <Button
                key={spec.id}
                className={styles.chipButton}
                onClick={() => onSetSpecialization(spec.id)}
              >
                <FilterChip className={styles.filterChip} active={specializationId === spec.id}>
                  {spec.title}
                </FilterChip>
              </Button>
            ))}
          </ul>
          <Button className={styles.button} onClick={() => setExpanded((prev) => !prev)}>
            {expanded ? "Скрыть" : "Посмотреть все"}
          </Button>
        </>
      )}
    </div>
  );
};
export default Specialization;
