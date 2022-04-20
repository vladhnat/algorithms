class FenwickTree {
  constructor(fenwickArray: Array<number>, array: Array<number>, n: number) {
    for (let i = 1; i <= n; i++) {
      fenwickArray[i] = 0;
    }
    
    for (let i = 0; i < n; i++) {
      this.update(fenwickArray, n, i, array[i]);
    }
  }

  update(fenwickArray: Array<number>, n: number, index: number, value: number): void {
    index = index + 1;

    while (index <= n) {
      fenwickArray[index] += value;
      index += index & (-index);
    }
  }

  getPrefixSum(fenwickArray: Array<number>, index: number): number {
    let currSum: number = 0;
    
    index = index + 1;

    while (index > 0) {
      currSum += fenwickArray[index];
      index -= index & (-index);
    }

    return currSum;
  }
}

export default FenwickTree;
