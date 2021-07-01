/**
 * Get outerHTML of elements, taking care of SVG element in IE well.
 * @param { Element } el element
 * @returns outer html
 */
function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    const container = document.createElement('div')
    container.appendChild(el.cloneNode(true))
    return container.innerHTML
  }
}