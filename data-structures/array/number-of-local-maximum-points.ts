const IsMaximumPoint = (arr: any[], index: number): boolean => {
  if (index === 0) {
    return arr[index] > arr[index + 1];
  } else if (index === arr.length - 1) {
    return arr[index] > arr[index - 1];
  } else {
    return arr[index] > arr[index + 1] && arr[index] > arr[index - 1];
  }
};

const CountLocalMaximumPoints = (
  arr: any[], 
  startIndex: number, 
  endIndex: number
): number => {
  if (startIndex === endIndex) {
    return IsMaximumPoint(arr, startIndex) ? 1 : 0;
  }

  const middleIndex = (startIndex + endIndex) / 2;

  return CountLocalMaximumPoints(arr, startIndex, endIndex) + CountLocalMaximumPoints(arr, middleIndex + 1, endIndex);
};

const NumberOfLocalMaximumPoints = (A) => CountLocalMaximumPoints(A, 0, A.length - 1);

export default NumberOfLocalMaximumPoints;
