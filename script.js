function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>a-b);
	let totalcost=0;
	while(arr.length>1)
		{
			let small1=arr.shift();
			let small2=arr.shift();
			let count=small1+small2;
			totalcost+=count;
			arr.pus(count);
			arr.sort((a,b)=>a-b);
		}
	return totalcost;
}

module.exports=mincost;
