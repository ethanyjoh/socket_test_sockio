var express = require('express'); 
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
    console.log(socket.id);
    // socket.on('update', () => io.emit('update'));
    // socket.on('update', (data) => io.emit('a', { response: data }));
    // socket.on('update', (data) => io.emit('a', data));

    
    socket.on('update', (data) => console.log(data));
});