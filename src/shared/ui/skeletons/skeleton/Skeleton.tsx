import type { CSSProperties } from "react";

import clsx from "clsx";

import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
  className?: string;
  style?: CSSProperties;
}

export const Skeleton = ({
  className,
  style,
  width = "100%",
  height = 16,
  borderRadius,
}: SkeletonProps) => {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={{ width, height, borderRadius, ...style }}
    ></div>
  );
};
