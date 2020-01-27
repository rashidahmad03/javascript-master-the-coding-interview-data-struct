/**
 * google que add to sum of array pair;
 */

let arr=[6,4,3,2,1,7];
let sum=9;
function pairsum(arr,sum){
	let len=arr.length;
	for(let i=0;i<len-1;i++){
		for(let j=i+1;j<len;j++)
			{
			if(arr[i]+arr[j]==sum)
				return true;
			}
	}
	return false;
}

//best case

function haspair(arr,sum){
	const len=arr.length;
	const mySet=new Set();
	for(let i=0;i<len;i++){
		if(mySet.has(arr[i])){
			return true;
		}
		mySet.add(sum-arr[i])
		
	}
	return false;
}

let result=haspair(arr,sum);
console.log(result);