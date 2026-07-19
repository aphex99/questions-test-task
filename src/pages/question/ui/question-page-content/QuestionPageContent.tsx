import { useState } from "react";

import clsx from "clsx";

import { ArrowDownIcon, ArrowLeftIcon } from "@/shared/assets";
import { ArrowRightIcon } from "@/shared/assets/icons";
import { Button, CardWrapper, ImageWrapper } from "@/shared/ui";

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
      <CardWrapper className={styles.headingCard}>
        <ImageWrapper
          questionLogo={true}
          title={"question's logo image"}
          className={styles.headingImage}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </CardWrapper>
      <CardWrapper>
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
      </CardWrapper>
      <CardWrapper>
        <h2 className={styles.answerTitle}>Краткий ответ</h2>
        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: shortAnswer }}></div>
      </CardWrapper>

      <CardWrapper className={styles.longAnswerCard}>
        <h2 className={styles.answerTitle}>Развёрнутый ответ</h2>
        <div
          className={clsx(styles.answer, styles.longAnswer, {
            [styles.longAnswerExpanded]: expanded,
          })}
          dangerouslySetInnerHTML={{ __html: longAnswer }}
        ></div>
        <div className={styles.overlay}>
          <Button
            className={clsx(styles.buttonExpand, { [styles.buttonExpandActive]: expanded })}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <span>Развернуть</span>
            <ArrowDownIcon />
          </Button>
        </div>
      </CardWrapper>
    </section>
  );
};
