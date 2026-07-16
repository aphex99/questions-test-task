import clsx from "clsx";

import { ArrowLeftIcon, ArrowRightIcon } from "@/shared/assets";
import { Button } from "@/shared/ui";

import { generatePagination } from "../lib/generatePagination.ts";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  page: number;
  total: number | undefined;
  limit: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, total, limit, setPage }: PaginationProps) => {
  const totalCount = total ?? 0;
  const pages = Math.ceil(totalCount / limit);

  const pagesArray = generatePagination(page, pages);

  if (pages <= 1) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.buttonArrow}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        <ArrowLeftIcon />
      </Button>

      <div className={styles.pageButtonsGroup}>
        {pagesArray.map((item, index) =>
          typeof item === "number" ? (
            <Button
              key={item}
              className={clsx(styles.pageButton, { [styles.pageButtonActive]: index === page })}
              onClick={() => setPage(item)}
            >
              {item}
            </Button>
          ) : (
            <span key={`dots-${index}`} className={styles.dots}>
              {item}
            </span>
          ),
        )}
      </div>

      <Button
        className={styles.buttonArrow}
        disabled={page === pages}
        onClick={() => setPage(page + 1)}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};
