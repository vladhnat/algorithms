declare global {
  interface Array<T> {
    heapify(index: number, heapSize: number): void
  }
}

Array.prototype.heapify = function(index: number, heapSize: number): void {
  let largest = index;
  const leftIndex: number = 2 * index + 1;
  const rightIndex: number = 2 * index + 2;

  if (leftIndex < heapSize && this[leftIndex] > this[largest]) {
    largest = leftIndex;
  }

  if (rightIndex < heapSize && this[rightIndex] > this[largest]) {
    largest = rightIndex;
  }

  if (largest !== index) {
    const temp: number = this[largest];

    this[largest] = this[index];
    this[index] = temp;

    this.heapify(largest, heapSize);
  }
}

function heapSort (items: number[]): number[] {
  const length: number = items.length;

  for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
    items.heapify(i, length);
  }

  for (let j = length - 1; j > 0; j--) {
    const tmp = items[0];

    items[0] = items[j];
    items[j] = tmp;
    items.heapify(0, j);
  }

  return items;
}

export default heapSort;
