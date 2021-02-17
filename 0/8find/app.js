/**
 * 
 * @param {number[]} arr 
 * @param {(n:number)=>boolean} func 
 */
function findElement(arr, func) {
    let num = arr.find(func);
    return num;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);