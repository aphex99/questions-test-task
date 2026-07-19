import { Button } from "@/shared/ui";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  title?: string;
}

import styles from "./ErrorMessage.module.scss";

export const ErrorMessage = ({ message, title, onRetry }: ErrorMessageProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {message && <p className={styles.text}>{message}</p>}
      {onRetry && (
        <Button className={styles.button} onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
};
