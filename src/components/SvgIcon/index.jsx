import React from "react";
import { useState } from "react";
import styles from "./index.module.scss";

/**
 * @typedef {Object} IProps
 * @property {string} iconClass 图标名字
 * @property {string} hoverClass 悬浮图片
 * @property {Number} width 宽度
 * @property {Number} height 高度
 * @property {string} className 图标的样式
 * @property {() => void} onClick 点击事件
 */

/**
 *
 * @param {IProps} props
 * @returns {JSX.Element}
 * @constructor
 */
const SVGIcon = (props) => {
  const [hover, setHover] = useState(false);

  const {
    width = 16,
    height = 16,
    iconClass,
    hoverClass,
    className,
    onClick,
  } = props;

  const styleExternalIcon = {
    mask: `url(${iconClass}) no-repeat 50% 50%`,
    WebkitMask: `url(${iconClass}) no-repeat 50% 50%`,
  };
  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path);

  const svgClass = className
    ? styles.svgIcon + " " + className
    : styles.svgIcon;

  const iconName =
    hover && hoverClass ? `#icon-svg-${hoverClass}` : `#icon-svg-${iconClass}`;
  const iconStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <>
      {isExternal(iconClass) ? (
        <div
          style={styleExternalIcon}
          className={`svg-external-icon ${svgClass}`}
        />
      ) : (
        <svg
          style={iconStyle}
          className={svgClass}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          aria-hidden="true"
          onClick={() => {
            onClick && onClick();
          }}
        >
          <use className={styles.svgIcon} xlinkHref={iconName} />
        </svg>
      )}
    </>
  );
};

export default SVGIcon;
