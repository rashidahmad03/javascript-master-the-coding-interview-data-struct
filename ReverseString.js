/**
 * 
 */
function reverse(str){
	if( !str || str.length<2 || typeof str!=='string' ){
		return "hmmm that is not good";
		}
	const backwords=[];
	const totalitem=str.length-1;
	for(let i=totalitem;i>=0;i--)
		{
		backwords.push(str[i]);
		}
	console.log(backwords);
	console.log(str);
	return backwords.join("");
	
}
console.log(reverse("hello"));

function reverse2(str){
	return str.split("").reverse().join("");
}

var reverse3=str=>[...str].reverse("").join("");
console.log(reverse2("hello"));

console.log(reverse3("hello"));