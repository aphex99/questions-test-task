import { useState } from "react";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";

import { ArrowDownIcon, DotsVerticalIcon } from "@/shared/assets";
import { Button, ImageWrapper, LabelsGroup } from "@/shared/ui";

import styles from "./QuestionCard.module.scss";

interface QuestionCardProps {
  complexity: number;
  id: number;
  imageSrc: string;
  page: number;
  rate: number;
  shortAnswer: string;
  title: string;
}

const QuestionCard = ({
  complexity,
  id,
  imageSrc,
  page,
  rate,
  shortAnswer,
  title,
}: QuestionCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const navigateToQuestionPage = () => {
    navigate(`/questions/${id}?page=${page}`);
  };

  return (
    <article className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <Button className={styles.buttonArrow} onClick={() => setExpanded((prev) => !prev)}>
          <ArrowDownIcon
            className={clsx(styles.arrowIcon, { [styles.arrowIconRotated]: expanded })}
          />
        </Button>
      </div>
      {expanded && (
        <div className={styles.content}>
          <div className={styles.labelsContainer}>
            <LabelsGroup rate={rate} complexity={complexity} />
            <Button className={styles.buttonDots}>
              <DotsVerticalIcon />
            </Button>
          </div>
          <ImageWrapper src={imageSrc} title={title} />
          <div
            className={styles.shortAnswer}
            dangerouslySetInnerHTML={{ __html: shortAnswer }}
          ></div>
          <Button className={styles.button} onClick={navigateToQuestionPage}>
            <span>Подробнее</span>
          </Button>
        </div>
      )}
    </article>
  );
};

export default QuestionCard;
