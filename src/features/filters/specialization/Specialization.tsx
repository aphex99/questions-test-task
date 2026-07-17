import { useState } from "react";

import clsx from "clsx";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { selectSpecializationId, setSpecialization } from "@/shared/model/questionsFilters/model";
import { Button, ErrorMessage, FilterChip } from "@/shared/ui";

import { useGetSpecializationsQuery } from "./api/specializationsApi.ts";

import styles from "./Specialization.module.scss";

export const Specialization = () => {
  const specializationId = useAppSelector(selectSpecializationId);
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(false);
  const { data, error, isLoading } = useGetSpecializationsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} />;
  }

  if (!data) {
    return null;
  }

  const onSetSpecialization = (id: number) => {
    dispatch(setSpecialization(id));
  };

  return (
    <div>
      <h4 className={styles.title}>Специализация</h4>
      <ul className={clsx(styles.list, { [styles.expanded]: expanded })}>
        {data.data.map((spec) => (
          <Button
            key={spec.id}
            className={styles.chipButton}
            onClick={() => onSetSpecialization(spec.id)}
          >
            <FilterChip active={specializationId === spec.id}>{spec.title}</FilterChip>
          </Button>
        ))}
      </ul>
      <Button className={styles.button} onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Скрыть" : "Посмотреть все"}
      </Button>
    </div>
  );
};
