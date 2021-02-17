/**
 * 
 * @param {string} str 
 * @param {string} target 
 */
function confirmEnding(str, target) {
    return new RegExp(`${target}$`).test(str);
  }
  
  confirmEnding("Bastian", "n");