/**
 *  find 2 array have same data
 *  return true
 */
const array1=[1,2,3,4,5];
const array2=[7,8,9,1];


function comp(arr1,arr2){
	let map={};
	for(let i of arr1){
		if(!map[i])
			map[i]=true;
		
	}
	for(let j of arr2)
		{
		if(map[j])
			return true;
		}
	return false;
}



console.log(comp(array1,array2))