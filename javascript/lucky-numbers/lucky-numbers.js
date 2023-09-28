// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const Array1 = array1.join('');
  const Array2 = array2.join('');
  return Number(Array1) + Number(Array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueMirror = Number(String(value).split('').reverse().join(''))
  return (value===valueMirror);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let message = '';
  if (!input) {
    message = 'Required field';
  } else if (Number(input) > 0) {
    message = '';
  } else if (String(input)) {
    message = 'Must be a number besides 0';
  }
  return message
}
