/*非对称加密*/
export function encrypt(key, info) {
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);
  let encrypted = encrypt.encrypt(info);
  let res = encodeURIComponent(encrypted);
  return res;
}
