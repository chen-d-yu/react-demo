import React from "react";
import styles from "./index.module.scss";

/**
 * @typedef IProps
 * @property {boolean} hasMenu
 * @property {React.ReactNode} extra
 */

/**
 * 头部组件
 * @param {IProps} props
 */
function Header(props) {
  const { hasMenu, extra } = props;
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div className={styles.left}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
