const binarySearchRecursive = (
  arr: Array<number>, x: number, low: number = 0, high: number = arr.length - 1
): number => {
  const mid: number = Math.floor(low + (high - low) / 2);

  if (high >= low) {
    if (arr[mid] === x) return mid;

    if (x < arr[mid]) {
      return binarySearchRecursive(arr, x, low, mid - 1);
    } else {
      return binarySearchRecursive(arr, x, mid + 1, high);
    }
  } else {
    return -1;
  }
};

const binarySearchIterative = (
  arr: Array<number>, x: number, low: number = 0, high: number = arr.length - 1
): number => {
  while (high >= low) {
    const mid: number = Math.floor(low + (high - low) / 2);

    if (arr[mid] === x) return mid;

    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

export default {
  binarySearchRecursive,
  binarySearchIterative,
};
