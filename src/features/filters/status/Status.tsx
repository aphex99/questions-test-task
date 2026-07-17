import { Button, FilterChip } from "@/shared/ui";

import { STATUSES } from "./config/constants.ts";

import styles from "./Status.module.scss";

export const Status = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Статус</h4>
      <ul className={styles.list}>
        {STATUSES.map((status) => (
          <Button key={status} disabled={true} className={styles.chipButton}>
            <FilterChip>{status}</FilterChip>
          </Button>
        ))}
      </ul>
    </div>
  );
};
