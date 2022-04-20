const validateLatOrLong = (value: any): void => {
  if (typeof value !== 'number') {
    throw new TypeError('The value of latitude or longitude should be a number');
  }
};

/**
 * 
 * @param {number} latitude1 The input integer
 * @param {number} longitude1 The input integer
 * @param {number} latitude2 The input integer
 * @param {number} longitude2 The input integer
 * @returns {number} Haversine distance
 */
const haversineDistance = (
  latitude1: number = 0,
  longitude1: number = 0,
  latitude2: number = 0,
  longitude2: number = 0
): number => {
  validateLatOrLong(latitude1);
  validateLatOrLong(latitude2);
  validateLatOrLong(longitude1);
  validateLatOrLong(longitude2);

  const earthRadius: number = 6371e3;
  const pi: number = Math.PI;
  const cos1: number = latitude1 * pi / 180.0;
  const cos2: number = latitude2 * pi / 180.0;
  const deltaLatitude: number = (latitude2 - latitude1) * pi / 180.0;
  const deltaLongitude: number = (longitude2 - longitude1) * pi / 180.0;

  const alpha: number = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) + Math.cos(cos1) * Math.cos(cos2) * Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2);
  const constant: number = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1 - alpha));

  return earthRadius * constant;
};

export default haversineDistance
