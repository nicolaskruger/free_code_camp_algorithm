/**
 * 
 * @param {[]} arr 
 * @param {number} size 
 */
function chunkArrayInGroups(arr, size) {
    let count = 0;
    let store = [];
    return arr.reduce((acc,cur,i)=>{
        store.push(cur);
        if(count==(size-1)||i==(arr.length-1)){
            acc.push([...store]);
            store = [];
        }
        count=(count+1)%size;
        return acc
    },[]);
  }
  
  const res = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

  console.log();