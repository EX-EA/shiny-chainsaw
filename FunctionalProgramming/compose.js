/**
 * sync compose function
 * @param  {...Function} fns
 * @returns
 */
function compose(...fns) {
  return function composed(result) {
    let list = fns.slice();

    while (list.length) {
      result = list.pop()(result);
    }

    return result;
  };
}

/**
 * async compose function
 * @returns
 */
function composePromise(...args) {
  return function composedPromise(...arg) {
    args.reduceRight((sequence, func) => {
      return sequence.then((result) => {
        return func(result);
      });
    }, Promise.resolve(args[args.length - 1](...arg)));
  };
}

let a = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("xhr1");
      resolve("xhr1");
    }, 5000);
  });
};

let b = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("xhr2");
      resolve("xhr2");
    }, 3000);
  });
};
let steps = [a, b]; // 从右向左执行
let composeFn = compose(...steps);

composeFn().then((res) => {
  console.log(666);
});
