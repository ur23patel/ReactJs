/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEmpty = (object) => {
  const objectKeys = Object.keys(object);
  if (objectKeys.length === 0) {
    return true;
  }

  return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
};
