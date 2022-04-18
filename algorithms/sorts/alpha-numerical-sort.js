/**
 * 
 * @param {String} a First value for sort
 * @param {String} b Second value for sort
 * @returns Sorted value
 */
const alphaNumericalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true });

export default alphaNumericalSort;
