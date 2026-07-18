import { useState } from "react";

import clsx from "clsx";

import { ArrowDownIcon, ArrowLeftIcon } from "@/shared/assets";
import { ArrowRightIcon } from "@/shared/assets/icons";
import { Button, MainCard } from "@/shared/ui";

import type { UseQuestionNavigationReturn } from "../../model/useQuestionNavigation.ts";

import styles from "./QuestionPageContent.module.scss";

interface QuestionPageContentProps {
  description: string;
  longAnswer: string;
  navigation: UseQuestionNavigationReturn;
  shortAnswer: string;
  title: string;
}

export const QuestionPageContent = ({
  description,
  longAnswer,
  navigation,
  shortAnswer,
  title,
}: QuestionPageContentProps) => {
  const [expanded, setExpanded] = useState(false);
  const { goNext, goPrevious, isFirstQuestion, isLastQuestion } = navigation;

  return (
    <section className={styles.wrapper}>
      <MainCard className={styles.headingCard}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.mainTitle}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </MainCard>
      <MainCard>
        <div className={styles.buttonsGroup}>
          <Button
            className={styles.swipeQuestionButton}
            onClick={goPrevious}
            disabled={isFirstQuestion}
          >
            <ArrowLeftIcon />
            <span>Предыдущий</span>
          </Button>
          <Button className={styles.swipeQuestionButton} onClick={goNext} disabled={isLastQuestion}>
            <span>Следующий</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </MainCard>
      <MainCard>
        <h2 className={styles.shortAnswerTitle}>Краткий ответ</h2>
        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: shortAnswer }}></div>
      </MainCard>
      <MainCard className={styles.longAnswerCard}>
        <h2>Развёрнутый ответ</h2>
        <div
          className={clsx(styles.answer, styles.lognAnswer, {
            [styles.longAnswerExpanded]: expanded,
          })}
          dangerouslySetInnerHTML={{ __html: longAnswer }}
        ></div>
        {!expanded && (
          <div className={styles.overlay}>
            <Button onClick={() => setExpanded((prev) => !prev)}>
              <span>Развернуть</span>
              <ArrowDownIcon />
            </Button>
          </div>
        )}
      </MainCard>
    </section>
  );
};
