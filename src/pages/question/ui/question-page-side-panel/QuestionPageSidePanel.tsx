import { SkillIcon } from "@/features/filters/skills/ui/skill-icon";

import type { Skill } from "@/shared/types";
import { CardWrapper, FilterChip, ImageWrapper, LabelsGroup } from "@/shared/ui";

import { socialLinks } from "../../config/socialLinks.ts";

import styles from "./QuestionPageSidePanel.module.scss";

interface QuestionPageSidePanelProps {
  complexity: number;
  keywords: string[];
  questionSkills: Skill[];
  rate: number;
  username: string;
}

export const QuestionPageSidePanel = ({
  complexity,
  keywords,
  questionSkills,
  rate,
  username,
}: QuestionPageSidePanelProps) => {
  return (
    <div className={styles.sidePanel}>
      <CardWrapper className={styles.cardWrapper}>
        <div>
          <p className={styles.panelTitle}>Уровень:</p>
          <LabelsGroup
            className={styles.labelsGroup}
            complexity={complexity}
            rate={rate}
            reverse={true}
          />
        </div>
        <div>
          <p className={styles.panelTitle}>Навыки:</p>
          <ul className={styles.skillsList}>
            {questionSkills.map((skill) => (
              <li key={skill.id}>
                <FilterChip active={true}>
                  <SkillIcon title={skill.title} src={skill.imageSrc} />
                  <span>{skill.title}</span>
                </FilterChip>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={styles.panelTitle}>Ключивые слова:</p>
          <ul className={styles.keywordsList}>
            {keywords.map((keyword) => (
              <li key={keyword}>
                <span className={styles.keyword}>{`#${keyword}`}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.authorWrapper}>
          <span>Автор: </span>
          <span className={styles.author}>{username}</span>
        </div>
      </CardWrapper>
      <CardWrapper active={true}>
        <div className={styles.adWrapper}>
          <div className={styles.profileInfo}>
            <ImageWrapper title={"Avatar image"} src={""} className={styles.avatar} avatar={true} />
            <div className={styles.nameWrapper}>
              <span>Руслан Куянец</span>
              <span className={styles.occupation}>Python Guru</span>
            </div>
          </div>
          <p>Guru - это эксперты YeaHub, которые помогают развивать комьюнити.</p>
          <ul className={styles.socialLinks}>
            {socialLinks.map(({ id, Icon }) => (
              <li key={id} className={styles.socialItem}>
                <Icon />
              </li>
            ))}
          </ul>
        </div>
      </CardWrapper>
    </div>
  );
};
