/**
 * 
 * @param {number} monthNumber The month number to check
 * @param {number} year The year of checked month number
 * @returns {number} Returns amount of days in a month
 */
const getMonthDays = (monthNumber: number, year: number): number => {
  const the31DaysMonths: Array<number> = [1,3,5,7,8,10,12];
  const the30DaysMonths: Array<number> = [4,6,9,11];

  if (
    !the31DaysMonths.includes(monthNumber) &&
    !the30DaysMonths.includes(monthNumber) &&
    (monthNumber !== 2)
  ) {
    throw new TypeError('Invalid Month Number');
  }

  if (the31DaysMonths.includes(monthNumber)) return 31;
  if (the30DaysMonths.includes(monthNumber)) return 30;

  if (year % 4 === 0) {
    if (
      (year % 100 !== 0) || 
      (year % 100 === 0 && year % 400 === 0)
    ) return 29;
  }

  return 28;
};

export default getMonthDays;
