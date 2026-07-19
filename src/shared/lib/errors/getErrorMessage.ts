import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError): string => {
  if ("status" in error) {
    if (typeof error.status === "string") {
      switch (error.status) {
        case "FETCH_ERROR":
          return "Network error";

        case "PARSING_ERROR":
          return "Response parsing failed";

        case "TIMEOUT_ERROR":
          return "Request timeout";

        default:
          return "Unexpected error";
      }
    }

    switch (error.status) {
      case 400:
        return "Bad request";

      case 401:
        return "Unauthorized";

      case 403:
        return "Forbidden";

      case 404:
        return "Not found";

      case 500:
        return "Internal server error";

      default:
        return "Unexpected error";
    }
  }

  return "Network error";
};
