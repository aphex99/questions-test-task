import { CardWrapper } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/skeletons/skeleton";

import styles from "./SkeletonOneQuestionPage.module.scss";

export const SkeletonOneQuestionPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <CardWrapper className={styles.headingCard}>
          <Skeleton height={70}></Skeleton>
          <Skeleton height={70}></Skeleton>
        </CardWrapper>
        <CardWrapper className={styles.buttonsCard}>
          <Skeleton style={{ maxWidth: "344px", margin: "0 auto" }} height={50}></Skeleton>
        </CardWrapper>
        <CardWrapper className={styles.shortAnswerCard}>
          <Skeleton height={24} style={{ maxWidth: "340px" }}></Skeleton>
          <Skeleton height={150}></Skeleton>
        </CardWrapper>
        <CardWrapper className={styles.shortAnswerCard}>
          <Skeleton height={24} style={{ maxWidth: "340px" }}></Skeleton>
          <Skeleton height={150}></Skeleton>
        </CardWrapper>
      </div>
      <div className={styles.panels}>
        <CardWrapper className={styles.panelGroup}>
          <Skeleton height={60}></Skeleton>
          <div className={styles.skillsGroup}>
            <Skeleton width={140} height={40}></Skeleton>
            <Skeleton width={60} height={40}></Skeleton>
            <Skeleton width={60} height={40}></Skeleton>
            <Skeleton width={120} height={40}></Skeleton>
            <Skeleton width={140} height={40}></Skeleton>
            <Skeleton width={60} height={40}></Skeleton>
          </div>
          <Skeleton height={90}></Skeleton>
          <Skeleton height={20}></Skeleton>
        </CardWrapper>
        <CardWrapper className={styles.panelGroup}>
          <Skeleton height={135}></Skeleton>
        </CardWrapper>
      </div>
    </div>
  );
};
//804x1004
