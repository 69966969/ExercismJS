// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let minutes;
  switch(name){
    case 'Pure Strawberry Joy':
      minutes = 0.5;
      break;
    case 'Energizer':
      minutes = 1.5;
      break;
    case 'Green Garden':
      minutes = 1.5;
      break;
    case 'Tropical Island':
      minutes = 3;
      break
    case 'All or Nothing':
      minutes = 5;
      break;
    default: 
      minutes = 2.5;
    }
    return minutes;
}


/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let wedgesCut = 0;
    let totalWedgesCut = 0
    let i = 0;
    while ((i < limes.length ) && (totalWedgesCut <= wedgesNeeded)) {
      let limeType = limes[0];
      switch(limes[i]) {
        case 'small':
          wedgesCut = 6;
          break;
        case 'medium':
          wedgesCut = 8;
          break;
        case 'large':
          wedgesCut = 10;
          break;
        default: 
          wedgesCut = 0;
          break;
        }
        totalWedgesCut += wedgesCut;
          if (wedgesNeeded !== 0) {
            i++
          }
        
    }
    
    return i;

    // do {
    //   if ()
      
    // } while (wedgesCut < wedgesNeeded && limes.length > 0);
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    let time = 0;
    let i = 0;
    let newArray = [];
    do {
      time = timeToMixJuice(orders[i])
      timeLeft = timeLeft - time
      i++;
      newArray = orders.slice(0,i)
      console.log(newArray)
    } while(timeLeft > 0)
    orders.splice(0, newArray.length)
    return orders
  }

