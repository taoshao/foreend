//事件的监听和分发
var EventEmitter = require('events').EventEmitter, a = new EventEmitter;
a.on('event',function(){		//绑定事件
	console.log('event called');
});
a.emit('event');	//分发事件
a.on('cancel',function(){
	console.log("event cancel");
});
a.emit('cancel');