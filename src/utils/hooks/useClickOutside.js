import { useEffect } from "react";

/**
 * 点击元素外部事件
 * @param {*} ref
 * @param {*} cb
 */
const useClickOutside = (ref, cb) => {
  useEffect(() => {
    /**
     * 绑定事件监听器
     */
    document.addEventListener("click", handleClickOutside);

    /**
     * 解绑事件监听器
     */
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /**
   * 处理点击事件
   */
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      cb && cb(event);
      event.stopPropagation();
    }
  };
};

export default useClickOutside;
