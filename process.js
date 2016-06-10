console.log(1);
//process.nextTick函数可以将一个函数的执行时间规划到下一个时间循环中。
process.nextTick(function(){
	console.log(3);
});
console.log(2);