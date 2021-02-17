/**
 * 
 * @param {string} str 
 */
function titleCase(str) {
    return str.split(' ')
        .map(s=>s.slice(0,1).toUpperCase()+s.slice(1).toLowerCase())
        .join(' ');
  }
  
  titleCase("I'm a little tea pot");