import { useSearchParams } from "react-router-dom";

export const useResetPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return () => {
    if (searchParams.get("page") === "1") {
      return;
    }

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", "1");
      return params;
    });
  };
};
