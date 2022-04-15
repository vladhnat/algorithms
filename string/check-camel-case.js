/**
 * 
 * @param {String} value the name of the variable to check
 * @returns `Boolean` return true if the string is in camelCase, else return false
 */
const checkCamelCase = (value) => {
  if (typeof value !== 'string') {
    throw new TypeError('Argument is not a string.')
  }

  const pattern = /^[a-z][A-Za-z]*$/;

  return pattern.test(value);
};

export default checkCamelCase;
