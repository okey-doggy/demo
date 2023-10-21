import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface IProps {
  children: ReactNode;
}
function Layout({ ...props }: IProps) {
  return (
    <main className={styles.container}>
      <div>{props.children}</div>
    </main>
  );
}

export default Layout;
