const items=[[1,2,4],[2,6,8],[7,89,97]];
console.log(items[0])
items.forEach(first=>{
	first.forEach(g=>{
		process.stdout.write( g+"  ")
	})
	console.log()
})