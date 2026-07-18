import clsx from "clsx";

import { Label } from "@/shared/ui";

import styles from "./LabelsGroup.module.scss";

interface LabelsGroupProps {
  rate?: number;
  complexity?: number;
  className?: string;
}

export const LabelsGroup = ({ rate, complexity, className }: LabelsGroupProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {rate && <Label title={"Рейтинг"} value={rate} />}
      {complexity && <Label title={"Сложность"} value={complexity} />}
    </div>
  );
};
