/**
 * 
 * @param {Function} func Original function
 * @param {*} cache - it's receive any cache DS which have get, set & has method
 * @returns {Function} Memoized function
 */
const memoize = (func: Function, cache: any = new Map()): Function => {
  const jsonReplacer = (_, value: Set<any> | Map<any, any>): Array<any> => {
    if (value instanceof Set) return [...value];

    if (value instanceof Map) return Object.fromEntries(value);

    return value;
  };

  return (...args: Array<any>): Function => {
    const argsKey: string = JSON.stringify(args, jsonReplacer);

    if (cache.has(argsKey)) return cache.get(argsKey);

    const result: Function = func(...args);

    cache.set(argsKey, result);

    return result;
  };
};

export default memoize;
