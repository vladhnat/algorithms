/**
 * 
 * @param {String} value the name of the variable to check
 * @returns {boolean} `Boolean` return true if the string is in camelCase, else return false
 */
const checkCamelCase = (value: string): boolean => {
  if (typeof value !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pattern: RegExp = /^[a-z][A-Za-z]*$/;

  return pattern.test(value);
};

export default checkCamelCase;
