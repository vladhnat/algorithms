/**
 * 
 * @param {String} a First value for sort
 * @param {String} b Second value for sort
 * @returns {number} Sorted value
 */
const alphaNumericalSort = (a: string, b: string): number => a.localeCompare(b, undefined, { numeric: true });

export default alphaNumericalSort;
