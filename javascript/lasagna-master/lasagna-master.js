/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
    // if (timer === undefined){
    //     return 'You forgot to set the timer.'
    // } else if (timer !== 0) {
    //     return 'Not done, please wait.'
    // } else if (timer === 0) {
    //     return 'Lasagna is done.'
    // }
    
}

export function preparationTime(layers, prepTime) {
    if (prepTime === undefined) {
        return layers.length * 2
    } else return layers.length * prepTime;
}

export function quantities(layers) {
    let noodlesGrams = 0
    let sauceLiters = 0
    for (let iterator of layers){
        if (iterator === 'noodles') {
            noodlesGrams += 50;
        } else if (iterator === 'sauce') {
            sauceLiters += 0.2;
        }
    
    }
    const sauceAndNoodles = {
        noodles: noodlesGrams,
        sauce: sauceLiters,
    }
    return sauceAndNoodles;
}

export function addSecretIngredient(friendsList, myList) {
    const lastItem = friendsList.slice(-1);
    myList.push(lastItem[0]);
    console.log(myList);
    // const completeList = myList.concat(lastItem);
    // console.log(completeList);
}

export function scaleRecipe(recipe, portions) {
    const scalingFactor = portions / 2;
    const scaledRecipe = {};
  
    for (let ingredient in recipe) {
      scaledRecipe[ingredient] = recipe[ingredient] * scalingFactor;
    }
  
    return scaledRecipe;
}