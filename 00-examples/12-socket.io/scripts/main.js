let socket = io.connect('http://loaclhost:4000');
socket.on('fromServer', function(data){
  console.log(data);
}