var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('update', (data) => io.emit('update', { data }))

});
server.listen('3000')