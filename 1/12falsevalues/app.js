/**
 * 
 * @param {[]} arr 
 */
function bouncer(arr) {
    return arr.filter(v=>![false, null, 0, "", undefined,NaN].includes(v));
  }
  
  bouncer([7, "ate", "", false, 9]);