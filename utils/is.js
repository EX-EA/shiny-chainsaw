// these helpers is explicitness and function inlining

/**
 * 
 * @param {unknown} v 
 * @returns boolean
 */
export const isUndef = (v) => {
  return v === undefined || v === null
};

/**
 * 
 * @param {unknown} v 
 * @returns boolean
 */
export const isDef = (v) => {
  return v !== undefined && v !== null
};

/**
 * 
 * @param {boolean} v 
 * @returns boolean
 */
export const isTrue = (v) => {
  return v === true
};

/**
 * 
 * @param {boolean} v 
 * @returns boolean
 */
export const isFalse = (v) => {
  return v === false
};

/**
 * check if value is primitive
 * @param {unknown} v 
 * @returns boolean
 */
export const isPrimitive = (v) => {
  return (
    typeof v === 'string' || 
    typeof v === 'number' || 
    typeof v === 'symbol' || 
    typeof v === 'boolean'
  )
};

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * @param {unknown} obj 
 * @returns boolean
 */
export const isObject = (obj) => {
  return obj !== null && typeof obj === 'object'
};

