'use strict';

// Complete this algo
const binarySearch = (array, target) => {
 if (array.length === 1){
	 if (array[0] === target){
		 return true
	 }
	 else {
		 return false
	 }
 }
 else {
	 const midpoint = Math.floor(array.length/2)
	 const left = array.slice(0, midpoint)
	 const right = array.slice(midpoint, array.length-1)
 }
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch