import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import { Header } from "@/widgets";

import { ErrorBoundaryFallback } from "@/shared/ui";

import styles from "./AppLayout.module.scss";

export const AppLayout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </ErrorBoundary>
    </main>
  );
};
