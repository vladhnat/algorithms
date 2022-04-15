/**
 * 
 * @param {number} num - The input integer
 * @return {number} - Absolute number of num
 */
const abs = (num) => {
  const validNumber = +num;

  if (Number.isNaN(validNumber)) {
    throw new TypeError('Argument is NaN - Not a Number')
  }

  return validNumber < 0 ? -validNumber : validNumber;
};

export default abs;
