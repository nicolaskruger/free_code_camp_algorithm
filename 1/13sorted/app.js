/**
 * 
 * @param {number[]} arr 
 * @param {number} num 
 */
function getIndexToIns(arr, num) {
    return [num,...arr].sort((a,b)=>a-b)
          .indexOf(num);
  }
  
const val =  getIndexToIns([3, 10, 5], 3)

console.log();