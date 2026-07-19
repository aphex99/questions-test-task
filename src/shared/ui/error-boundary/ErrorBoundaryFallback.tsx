import { Button } from "@/shared/ui";

import styles from "./ErrorBoundaryFallback.module.scss";
interface ErrorBoundaryFallbackProps {
  onRetry?: () => void;
}

export const ErrorBoundaryFallback = ({ onRetry }: ErrorBoundaryFallbackProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.text}>An unexpected error occurred.</p>
        <p className={styles.text}>Please refresh the page</p>
        <Button className={styles.button} onClick={onRetry}>
          Retry
        </Button>
      </div>
    </div>
  );
};
