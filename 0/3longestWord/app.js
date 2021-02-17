/**
 * 
 * @param {string} str 
 */
function findLongestWordLength(str) {
    return str.split(/\s/)
                .sort((a,b)=>b.length-a.length)[0].length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");