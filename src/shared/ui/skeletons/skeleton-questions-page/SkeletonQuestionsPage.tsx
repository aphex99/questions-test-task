import { CardWrapper } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/skeletons/skeleton";

import styles from "./SkeletonQuestionsPage.module.scss";

export const SkeletonQuestionsPage = () => {
  return (
    <div className={styles.wrapper}>
      <CardWrapper className={styles.questionsWrapper}>
        <Skeleton height={47}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56}></Skeleton>
        <Skeleton height={56} style={{ marginBottom: "40px" }}></Skeleton>
        <Skeleton height={28} width={240} style={{ marginBottom: "16px" }}></Skeleton>
      </CardWrapper>
      <CardWrapper className={styles.panel}>
        <Skeleton height={48}></Skeleton>
        <div className={styles.skeletonGroup}>
          <Skeleton height={54}></Skeleton>
          <Skeleton height={54}></Skeleton>
          <Skeleton height={54}></Skeleton>
          <Skeleton height={54}></Skeleton>
        </div>
        <div className={styles.skeletonGroup}>
          <Skeleton height={54}></Skeleton>
          <Skeleton height={54}></Skeleton>
          <Skeleton height={54}></Skeleton>
          <Skeleton height={54}></Skeleton>
        </div>
        <Skeleton height={64}></Skeleton>
        <Skeleton height={64}></Skeleton>
        <Skeleton height={64}></Skeleton>
      </CardWrapper>
    </div>
  );
};
//804x1004
