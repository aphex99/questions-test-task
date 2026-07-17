import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./FilterChip.module.scss";

interface FilterChipProps {
  active?: boolean;
  children: ReactNode;
}

export const FilterChip = ({ children, active }: FilterChipProps) => {
  return <div className={clsx(styles.wrapper, { [styles.active]: active })}>{children}</div>;
};
