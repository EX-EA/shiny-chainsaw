/* validate **********************************************************************************/
/**
 * 校验手机号
 * @param {Object} tel
 */
export function validatePhone(tel) {
  var TEL_REGEXP = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;

  if (TEL_REGEXP.test(tel)) {
    return true;
  }
  return false;
}

/**
 * 校验邮箱
 * @param {Object} email
 */
export function validateEmail(email) {
  var EMAIL_REGEXP = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/

  if (EMAIL_REGEXP.test(email)) {
    return true;
  }
  return false;
}

/**
 * 校验数字字母
 * @param {Object} value
 */
export function validateNumEng(value) {
  return !/^([a-zA-Z0-9]+)$/.test(value);
},

/**
 * 校验数字字母汉字
 * @param {Object} value
 */
export function(value) {
  //数字字母汉字
  return !/^([\u4e00-\u9fa5\a-zA-Z0-9]+)$/.test(value);
},

/**
 * 校验银行卡号
 * @param {Object} num
 */
export function validateCardNum(num) {
  var NUM_REGEXP = /^([1-9]{1})(\d{14}|\d{18})$/;

  if (NUM_REGEXP.test(num)) {
    return true;
  }
  return false;
}

/**
 * 校验合法uri
 * @param {Object} val
 */
export function validateURL(val) {
  const urlRegex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlRegex.test(val);
}

/**
 * 校验小写字母
 * @param {Object} str
 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 校验大写字母
 * @param {Object} str
 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 校验大小写字母
 * @param {Object} str
 */
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 校验身份证号码
 * @param {Object} str
 */
export function validateIdNo(str) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(str);
}

/**
 * 校验正整数
 * @param {Object} str
 */
export function validateInteger(str) {
  const reg = /^[1-9]*[1-9][0-9]*$/;
  return reg.test(str);
}



/**
 * 校验非法字符
 * @param {Object} value
 */
export function isIllegalr(value) {
  return /^[A-Za-z0-9(). \-\u2E80-\uFE4F\u3400-\u4DBF\uF900-\uFAD9\u3000-\u303F\u2000-\u206F\uFF00-\uFFEF\_\·]{1,60}$/
    .test(
      value
    );
},


/* is ********************************************************************************/

/**
 * 判断是否是空对象或空数组
 * @param {Object} obj
 */
export function isEmpty(obj) {
  //检验null和undefined
  if (!obj && obj !== 0 && obj !== '') {
    return true;
  }
  //检验数组
  if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) {
    return true;
  }
  //检验对象
  if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}

/* function ************************************************************************/
export function numberRange() {
  
}
