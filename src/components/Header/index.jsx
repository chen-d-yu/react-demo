import React from "react";
import styles from "./index.module.scss";
import SVGIcon from "../SvgIcon";
import classnames from "classnames";
import Menu from "../Menu";

/**
 * @typedef IProps
 * @property {boolean} hasMenu
 * @property {React.ReactNode} extra
 */

const link = ["Coaching", "For business", "Log in"];

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
          <div className={styles.left}>
            <div className={styles.logo}>
              <SVGIcon width={100} height={100} iconClass={"logo"} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div className={classnames(styles.sectionLeft, styles.section)}>
                <div>
                  <Menu />
                </div>
              </div>
              <div className={classnames(styles.sectionRight, styles.section)}>
                {link.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={classnames(
                        styles["header-link"],
                        index === 0 && styles["header-link-first"]
                      )}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
