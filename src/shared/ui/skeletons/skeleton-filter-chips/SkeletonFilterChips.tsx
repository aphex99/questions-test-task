import { Skeleton } from "@/shared/ui/skeletons/skeleton";

import styles from "./SkeletonFilterChips.module.scss";

export const SkeletonFilterChips = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton width={180} height={42}></Skeleton>
      <Skeleton width={60} height={42}></Skeleton>
      <Skeleton width={160} height={42}></Skeleton>
      <Skeleton width={50} height={42}></Skeleton>
      <Skeleton width={100} height={42}></Skeleton>
      <Skeleton width={80} height={42}></Skeleton>
      <Skeleton width={180} height={42}></Skeleton>
      <Skeleton width={60} height={42}></Skeleton>
      <Skeleton width={160} height={42}></Skeleton>
      <Skeleton width={60} height={42}></Skeleton>
      <Skeleton width={160} height={42}></Skeleton>
      <Skeleton width={50} height={42}></Skeleton>
      <Skeleton width={100} height={42}></Skeleton>
      <Skeleton width={80} height={42}></Skeleton>
    </div>
  );
};
