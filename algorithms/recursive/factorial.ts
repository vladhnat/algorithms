/**
 * 
 * @param {number} n  The input number
 * @returns {number} Factorial of number
 */
const factorial = (n: number): number => {
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

export default factorial;
