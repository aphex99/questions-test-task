import { Outlet } from "react-router-dom";

import { Header } from "@/widgets";

import styles from "./AppLayout.module.scss";

export const AppLayout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};
