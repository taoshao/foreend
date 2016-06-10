var a =5;
var b =a;
b =6;
var c = function(){};
console.log(a);
console.log(b);
function d (e,f){
	this.a = e;
	console.log(this.a);
};
var f1 = {};
d.apply(null,[55,122]);
d.apply(f1,[55,122]);
d.call(null,66,233);