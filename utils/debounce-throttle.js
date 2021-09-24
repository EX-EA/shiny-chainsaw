/**
 * first
 * @param {Function} fn 防抖处理函数
 * @param {number} delay 延迟时间,毫秒数
 * @param {Boolean} immediate 是否立即执行
 * @returns
 */
/* function debounce(fn, delay, immediate) {
  let timer;

  return function debouncedFn(args) {
    timer && clearTimeout(timer);

    if (immediate) {
      const flag = !timer;
      flag && fn(args);

      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn(args);
      }, delay);
    }
  };
}
 */

// second
function debounce(fn, delay, immediate) {}

export default debounce;
