import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError): string => {
  if ("message" in error) {
    // need to fix
    return `Serialized error and I don't know what to do next: ${error.message}`;
  }

  if ("status" in error) {
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
