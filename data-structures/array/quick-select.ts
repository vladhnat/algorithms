function QuickSelect(items: Array<number>, kth: number): number {
  if (kth < 1 || kth > items.length) {
    throw new RangeError('Index out of bound');
  }

  return RandomizedSelect(items, 0, items.length - 1, kth)
};

function RandomizedSelect(items: Array<number>, left: number, right: number, i: number) {
  if (left === right) return items[left];

  const pivotIndex: number = RandomizedPartition(items, left, right);
  const k: number = pivotIndex - left + 1;

  if (i === k) return items[pivotIndex];
  if (i < k) return RandomizedSelect(items, left, pivotIndex - 1, i);

  return RandomizedSelect(items, pivotIndex + 1, right, i - k);
}

function RandomizedPartition(items: Array<number>, left: number, right: number): number {
  const rand: number = getRandomInt(left, right);
  
  Swap(items, rand, right);

  return Partition(items, left, right);
}

function Partition(items: Array<number>, left: number, right: number): number {
  const x: number = items[right];
  let pivotIndex: number = left - 1;

  for (let j: number = left; j < right; j++) {
    if (items[j] <= x) {
      pivotIndex++;
      Swap(items, pivotIndex, j);
    }
  }

  Swap(items, pivotIndex + 1, right);

  return pivotIndex + 1;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Swap(arr: Array<number>, x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

export default QuickSelect;
