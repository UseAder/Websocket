//这个客户端放置在浏览器上引入
var ws = new WebSocket('ws://127.0.0.1:9000');

ws.onopen = function(){
	console.log(0);
};

ws.onmessage = function(event){
	var chatroom = document.querySelector('#chatroom');
	chatroom.innerHTML +=event.data + '<br/>';
};

ws.onclose = function(){
	console.log('Closed');
};

ws.onerror = function(err){
	console.log('error'+err);
};
