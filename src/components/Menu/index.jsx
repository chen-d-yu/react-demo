import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";
import SVGIcon from "../SvgIcon";
import { useClickOutside } from "@/utils/hooks";

const categoriesArr = [
  "Inspiration & Personal Growth",
  "Health & Meditation",
  "Career & Business",
  "Relationship & Family",
  "Science & Technology",
  "Culture & Humanity",
  "Money & Economics",
];

/**
 * @typedef {Object} IProps
 * @property {Array<string>} categories
 */

/**
 *
 * @param {IProps} props
 * @returns
 */

function Menu(props) {
  const { categories = categoriesArr } = props;

  const [hasClick, setHasClick] = useState(false);

  const menuRef = useRef(null);

  useClickOutside(menuRef, (event) => {
    console.log("menuRef");
    setHasClick(false);
  });

  return (
    <div ref={menuRef} className={classnames(styles.menu, "hidden relative")}>
      <button
        className={
          "flex items-center cursor-pointer font-medium text-midnight hover:text-blue focus:text-blue active:text-blue"
        }
        onClick={() => setHasClick(!hasClick)}
      >
        <span>Categories</span>
        <SVGIcon
          className={classnames(
            hasClick && styles["rotate-180deg"],
            "w-3 h-3 ml-2 mt-1"
          )}
          width={12}
          height={12}
          iconClass={"down-arrow"}
        />
      </button>
      <div
        id="menu-layout"
        className={classnames(
          styles.menuLayout,
          "flex bg-light-pale-mint-grey rounded-lg border border-light-grey z-50 absolute top-8 ",
          !hasClick && "hidden"
        )}
      >
        <ul className="w-80 m-6 bg-light-pale-mint-grey z-10">
          {categories.map((category) => {
            return (
              <li key={category} className="flex mb-2 last:mb-0">
                <button className="flex items-center h-12 l:h-10 w-full text-midnight group cursor-pointer hover:text-blue active:text-blue ">
                  <div className="w-full flex items-center font-medium">
                    {category}
                  </div>
                  <div>
                    <SVGIcon
                      className={"w-6 h-6 p-1 -rotate-90 flex-shrink-0"}
                      width={24}
                      height={24}
                      iconClass={"down-arrow"}
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
