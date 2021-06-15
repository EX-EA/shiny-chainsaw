// 打印原型链
function getPrototypeChain(obj) {
  var protoChain = [];
  if (!Object.getPrototypeOf(obj)) {
    protoChain.push(null);
  }

  while ((obj = Object.getPrototypeOf(obj))) {
    //返回给定对象的原型。如果没有继承属性，则返回 null 。
    protoChain.push(obj);
  }
  return protoChain;
}
