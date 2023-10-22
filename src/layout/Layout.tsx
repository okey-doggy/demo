import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface IProps {
  children: ReactNode;
}
function Layout({ ...props }: IProps) {
  return <main className={styles.container}>{props.children}</main>;
}

export default Layout;
