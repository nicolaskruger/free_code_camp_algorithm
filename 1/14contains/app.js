/**
 * 
 * @param {string[]} arr 
 */
function mutation(arr) {
    [...arr] = [arr[0].toLowerCase(),arr[1].toLowerCase()]
    return arr[1].split('')
            .reduce((acc,curr)=>acc&&arr[0].includes(curr),true);
  }
  
  mutation(["hello", "hey"]);