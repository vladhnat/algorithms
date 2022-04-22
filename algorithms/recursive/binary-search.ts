/**
 * 
 * @param {number} arr sorted array of integers
 * @param {number} searchValue The input integer
 * @param {number} low The input integer
 * @param {number} high The input integer
 * @returns {number} return index of searchValue if found else return -1
 */
const binarySearch = (
  arr: any[],
  searchValue: number,
  low: number = 0,
  high: number = arr.length - 1
): number => {
  const mid: number = low + Math.floor((high - low) / 2);

  if (arr[mid] === searchValue) return mid;

  if (arr[mid] > searchValue) {
    return binarySearch(arr, searchValue, low, mid - 1);
  }

  return binarySearch(arr, searchValue, mid + 1, high);
};

export default binarySearch;
