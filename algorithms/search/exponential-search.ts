const binarySearch = (arr: number[], value: number, floor: number, ceiling: number): number => {
  const mid: number = Math.floor((floor + ceiling) / 2);

  if (arr[mid] === value) return mid;

  if (floor > ceiling) return -1;

  if (arr[mid] > value) {
    return binarySearch(arr, value, floor, mid - 1);
  } else {
    return binarySearch(arr, value, mid + 1, ceiling);
  }
};

const exponentialSearch = (arr: number[], length: number, value: number): number => {
  if (arr[0] === value) return 0;

  let i = 1;
  
  while (i < length && arr[i] <= value) {
    i = i * 2;
  }

  return binarySearch(arr, value, i / 2, Math.min(i, length));
};

export default exponentialSearch;
