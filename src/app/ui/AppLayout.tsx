import type { PropsWithChildren } from "react";

import styles from "./App.module.scss";

const AppLayout = ({ children }: PropsWithChildren) => {
  return <div className={styles.layout}>{children}</div>;
};

export default AppLayout;
