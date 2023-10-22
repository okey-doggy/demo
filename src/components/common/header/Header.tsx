import { ReactNode } from "react";
import styles from "./Header.module.scss";

type THeader = {
  children: ReactNode;
};

function Header({ ...props }: THeader) {
  return <header className={styles.header}>{props.children}</header>;
}

export default Header;
