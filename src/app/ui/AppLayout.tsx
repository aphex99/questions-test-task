import { Outlet } from "react-router-dom";

import { Header } from "@/widgets";

import styles from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
