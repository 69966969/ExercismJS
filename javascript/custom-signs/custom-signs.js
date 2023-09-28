// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age < 50 ? `young` : `mature`} fellow you are.`;
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
  let basePayment = 20;
  let extraPayment = 0;
  let newArray = sign.split('');
  if (newArray.length) {
    for (let i = 0; i < newArray.length; i++) {
      extraPayment += 2;
    }
  }
  const savedBase = Number(basePayment)
  const savedExtra = Number(extraPayment)
  const total = savedBase + savedExtra

  // savedBase.toFixed(2)
  // extraPayment.toFixed(2);
  // let joinArray = newArray.join('');
  return `Your sign costs ${total.toFixed(2)} ${currency}.`
}
