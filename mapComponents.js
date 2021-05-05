/**
 * 利用webpack的require.context方法
 * @param {string} directory 可选参数，从全局组件中引用
 * @returns Components对象
 */
export default function mapComponents(directory) {
  const path = require("path");

  if (!directory) {
    const files = require.context("./components", false, /.vue$/);
  } else {
    const files = require.context(`@/components/${directory}`, false, /.vue$/);
  }
  console.log("files: ", files);

  const components = {};

  files.keys().forEach((file) => {
    const name = path.basename(file, ".vue");
    components[name] = files(file).default || files(file);
  });

  return components;
}
