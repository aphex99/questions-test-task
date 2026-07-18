import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./MainCard.module.scss";

interface MainCardProps {
  className?: string;
  children: ReactNode;
}

export const MainCard = ({ children, className }: MainCardProps) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};
