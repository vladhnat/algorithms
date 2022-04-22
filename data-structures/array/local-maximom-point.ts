const findMaxPointIndex = (
  arr: any[],
  rangeStartIndex: number,
  rangeEndIndex: number,
  originalLength: number
): number => {
  const middleIndex: number = rangeStartIndex + ((rangeEndIndex - rangeStartIndex) / 2);

  if (
    (middleIndex === 0 || arr[middleIndex - 1] <= arr[middleIndex]) &&
    (middleIndex === originalLength - 1 || arr[middleIndex + 1] <= arr[middleIndex])
  ) {
    return middleIndex;
  } else if (middleIndex > 0 && arr[middleIndex - 1] > arr[middleIndex]) {
    return findMaxPointIndex(arr, rangeStartIndex, (middleIndex - 1), originalLength);
  } else {
    return findMaxPointIndex(arr, (middleIndex + 1), rangeEndIndex, originalLength);
  }
};

const LocalMaximomPoint = (A: any[]): number => findMaxPointIndex(A, 0, A.length - 1, A.length);

export default LocalMaximomPoint;
