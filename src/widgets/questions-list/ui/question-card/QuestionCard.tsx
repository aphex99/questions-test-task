import { ArrowDownIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";

import styles from "./QuestionCard.module.scss";

interface QuestionCardProps {
  title: string;
}

const QuestionCard = ({ title }: QuestionCardProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <Button className={styles.button}>
        <ArrowDownIcon />
      </Button>
    </div>
  );
};

export default QuestionCard;
