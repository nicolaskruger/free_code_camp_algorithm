/**
 * 
 * @param {string} str 
 * @param {number} num 
 */
function repeatStringNumTimes(str, num) {
    if(num<=0)
        return ""
    return [...Array(num).keys()].reduce((acc,curr)=>acc+str,'');
  }
  
  repeatStringNumTimes("abc", 3);