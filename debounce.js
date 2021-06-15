function debounce(fn, delay, immediate) {
  let timer;

  return function debouncedFn(args) {
    timer && clearTimeout(timer);

    if (immediate) {
      let flag = !timer;
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
