import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./CardWrapper.module.scss";

interface MainCardProps {
  className?: string;
  active?: boolean;
  children: ReactNode;
}

export const CardWrapper = ({ children, className, active }: MainCardProps) => {
  return (
    <div className={clsx(styles.card, className, { [styles.active]: active })}>{children}</div>
  );
};
