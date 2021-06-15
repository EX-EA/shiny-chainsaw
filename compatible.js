window.onload = function () {
  //  解决IE9下面输入框删除文本时内容没有被删除的问题
  (function (d) {
    if (navigator.userAgent.indexOf("MSIE 9") === -1) return;

    d.addEventListener("selectionchange", function () {
      var el = d.activeElement;

      if (
        el.tagName === "TEXTAREA" ||
        (el.tagName === "INPUT" && el.type === "text")
      ) {
        var ev = d.createEvent("CustomEvent");
        ev.initCustomEvent("input", true, true, {});
        el.dispatchEvent(ev);
      }
    });
  })(document);
};

function isIE9() {
  return /MSIE 9.0/i.test(window.navigator.userAgent);
}
