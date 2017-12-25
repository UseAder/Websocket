var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:9000});

var clientMap = new Object();
var i = 0;

wss.on('connection',function(ws){
	console.log('有人上线了');
	ws.name = ++i;
	clientMap[ws.name] = ws;

	ws.on('message',function(msg){
		broadcast(msg,ws);
	});

	ws.on('close',function(){
		console.log('有人离开了');
	});

	ws.send('管理员：你好！');

});

function broadcast(msg,ws){
	for(var key in clientMap){
		clientMap[key].send(ws.name+'说：'+msg);
	}
}
