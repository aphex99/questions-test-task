import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./FilterChip.module.scss";

interface FilterChipProps {
  active?: boolean;
  children: ReactNode;
  className?: string;
}

export const FilterChip = ({ children, className, active }: FilterChipProps) => {
  return (
    <div className={clsx(styles.wrapper, className, { [styles.active]: active })}>{children}</div>
  );
};
