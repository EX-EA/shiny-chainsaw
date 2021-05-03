/*手机号*/
export function validateTel(tel) {
  var TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

  if (TEL_REGEXP.test(tel)) {
    return true;
  }
  return false;
}

/*邮箱*/
export function validateEmail(email) {
  var EMAIL_REGEXP = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

  if (EMAIL_REGEXP.test(email)) {
    return true;
  }
  return false;
}

/*银行卡号*/
export function validateCardNum(num) {
  var NUM_REGEXP = /^([1-9]{1})(\d{14}|\d{18})$/;

  if (NUM_REGEXP.test(num)) {
    return true;
  }
  return false;
}

/* 合法uri*/
export function validateURL(val) {
  const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlRegex.test(val);
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母*/
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

//验证身份证号码
export function validateIdNo(str) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}

// 正整数
export function validateInteger(str) {
  const reg = /^[1-9]*[1-9][0-9]*$/;
  return reg.test(str);
}
