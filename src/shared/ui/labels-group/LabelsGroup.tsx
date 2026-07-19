import clsx from "clsx";

import { Label } from "@/shared/ui";
import { LABELS } from "@/shared/ui/labels-group/config/constants.ts";

import styles from "./LabelsGroup.module.scss";

type LabelType = "rate" | "complexity";

interface LabelsGroupProps {
  rate?: number;
  complexity?: number;
  className?: string;
  order?: LabelType[];
}

export const LabelsGroup = ({
  rate,
  complexity,
  className,
  order = ["rate", "complexity"],
}: LabelsGroupProps) => {
  const values = { rate, complexity };

  return (
    <div className={clsx(styles.wrapper, className)}>
      {order.map((key) => {
        const value = values[key];

        if (!value) {
          return null;
        }

        return <Label key={key} title={LABELS[key].title} value={value} />;
      })}
    </div>
  );
};
