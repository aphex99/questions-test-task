import { useState } from "react";

import clsx from "clsx";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { toggleSkill } from "@/shared/model/questionsFilters/model";
import { selectSkills } from "@/shared/model/questionsFilters/model";
import { Button, ErrorMessage, FilterChip } from "@/shared/ui";

import { useGetSkillsQuery } from "../api/skillsApi.ts";

import { SkillIcon } from "./skill-icon/SkillIcon.tsx";

import styles from "./Skill.module.scss";

interface SkillProps {
  resetPage: () => void;
}

export const Skill = ({ resetPage }: SkillProps) => {
  const skills = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(false);
  const { data, error, isLoading, refetch } = useGetSkillsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} onRetry={refetch} />;
  }

  const onToggleSkill = (skillId: number) => {
    dispatch(toggleSkill(skillId));
    resetPage();
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Навыки</h4>
      {!data ? (
        <span>Нет навыков</span>
      ) : (
        <>
          <ul className={clsx(styles.list, { [styles.expanded]: expanded })}>
            {data.data.map((skill) => (
              <li key={skill.id}>
                <Button
                  key={skill.id}
                  className={styles.chipButton}
                  onClick={() => onToggleSkill(skill.id)}
                >
                  <FilterChip active={skills.includes(skill.id)}>
                    <SkillIcon title={skill.title} src={skill.imageSrc} />
                    <span>{skill.title}</span>
                  </FilterChip>
                </Button>
              </li>
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
