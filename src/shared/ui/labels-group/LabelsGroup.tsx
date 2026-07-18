import clsx from "clsx";

import { Label } from "@/shared/ui";

import styles from "./LabelsGroup.module.scss";

interface LabelsGroupProps {
  rate?: number;
  complexity?: number;
  className?: string;
  reverse?: boolean;
}

export const LabelsGroup = ({ rate, complexity, className, reverse }: LabelsGroupProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {reverse ? (
        <>
          {complexity && <Label title={"Сложность"} value={complexity} />}
          {rate && <Label title={"Рейтинг"} value={rate} />}
        </>
      ) : (
        <>
          {rate && <Label title={"Рейтинг"} value={rate} />}
          {complexity && <Label title={"Сложность"} value={complexity} />}
        </>
      )}
    </div>
  );
};
