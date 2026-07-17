import { useState } from "react";

import clsx from "clsx";

import { getErrorMessage } from "@/shared/lib/errors";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux";
import { toggleSkill } from "@/shared/model/questionsFilters/model";
import { selectSkills } from "@/shared/model/questionsFilters/model";
import { Button, ErrorMessage, FilterChip } from "@/shared/ui";

import { useGetSkillsQuery } from "../api/skillsApi.ts";

import { SkillIcon } from "./SkillIcon";

import styles from "./Skill.module.scss";

export const Skill = () => {
  const skills = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(false);
  const { data, error, isLoading } = useGetSkillsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <ErrorMessage message={getErrorMessage(error)} />;
  }

  if (!data) {
    return null;
  }

  const onToggleSkill = (skillId: number) => {
    dispatch(toggleSkill(skillId));
  };

  return (
    <div>
      <h4 className={styles.title}>Навыки</h4>
      <ul className={clsx(styles.list, { [styles.expanded]: expanded })}>
        {data.data.map((skill) => (
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
        ))}
      </ul>
      <Button className={styles.button} onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Скрыть" : "Посмотреть все"}
      </Button>
    </div>
  );
};
