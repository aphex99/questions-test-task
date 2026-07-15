import { Button } from "@/shared/ui";

interface PaginationProps {
  page: number;
  total: number | undefined;
  limit: number;
  setPage: (page: number) => void;
}

const Pagination = ({ page, total, limit, setPage }: PaginationProps) => {
  const totalCount = total ?? 0;
  const pages = Math.ceil(totalCount / limit) ?? 0;

  return (
    <div>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {"<"}
      </Button>
      <span>
        {page}/{pages}
      </span>
      <Button disabled={page === pages} onClick={() => setPage(page + 1)}>
        {">"}
      </Button>
    </div>
  );
};

export default Pagination;
