import {SkillIcon} from "@/features/filters/skill/ui/skill-icon";

import type {Skill} from "@/shared/types";
import {CardWrapper, FilterChip, LabelsGroup} from "@/shared/ui";

import {socialLinks} from "../../config/socialLinks.ts";

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
                                      }: QuestionPageSidePanelProps) => {
  return (
    <div className={styles.sidePanel}>
      <CardWrapper className={styles.cardWrapper}>
        <div>
          <h4 className={styles.panelTitle}>Уровень:</h4>
          <LabelsGroup
            className={styles.labelsGroup}
            complexity={complexity}
            order={["complexity", "rate"]}
            rate={rate}
          />
        </div>
        <div>
          <h4 className={styles.panelTitle}>Навыки:</h4>
          <ul className={styles.skillsList}>
            {questionSkills.map((skill) => (
              <li key={skill.id}>
                <FilterChip active={true}>
                  <SkillIcon title={skill.title} src={skill.imageSrc}/>
                  <span>{skill.title}</span>
                </FilterChip>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.panelTitle}>Ключивые слова:</h4>
          <ul className={styles.keywordsList}>
            {keywords.map((keyword) => (
              <li key={keyword}>
                <span className={styles.keyword}>{`#${keyword}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardWrapper>
      <CardWrapper active={true}>
        <div className={styles.adWrapper}>
          <ul className={styles.socialLinks}>
            {socialLinks.map(({id, Icon}) => (
              <li key={id} className={styles.socialItem}>
                <Icon/>
              </li>
            ))}
          </ul>
        </div>
      </CardWrapper>
    </div>
  );
};
