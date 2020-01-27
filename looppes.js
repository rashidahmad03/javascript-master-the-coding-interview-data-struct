const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

function findnemo(array){
	let t1=performance.now();
	for(let i=0;i<array.length;i++)
		{
		if(array[i]==='rashid')
			console.log("Rashid :");
		}
	let t2=performance.now();
	console.log("Task := "+(t2-t1)+" militest");	
}

function arrs(array){
	array.forEach(function(item, index, array) {
		  console.log(item, index)
		})
}




let Items=["hello","Hi","rashid","ahmad","hero"];
findnemo(Items)
arrs(Items)
console.log(Items);

for(let i=0;i<Items.length;i++)
	process.stdout.write(Items[i]+" ");
console.log("\n>>>>>>> loop1<<<<<<")

for(let i of Items)
	process.stdout.write(i+" ");
console.log("\n >>>>>>> 2 loop >>>>>>>>>>");

const funct2=array =>{
	array.forEach(itm=>{
		process.stdout.write(itm +" ")
	})
		
	console.log("\n <<<<<<<<<< loop 3 >>>>>>>>> ")
}
funct2(Items);

Items.forEach(k=>{
	process.stdout.write(k+" ")
})