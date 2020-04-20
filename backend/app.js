var express = require('express');
var socket = require('socket.io');

var app = express();
var likes =0;
var dislikes =0;

server = app.listen(5000, function(){
    console.log('server is running on port 5000')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })

    socket.emit('like_count',likes);
    socket.emit('dislike_count',dislikes);

    socket.on('clicked',function(){
        likes+=1;//increments global click count
        dislikes+=1;
        io.emit('buttonUpdate',likes);//send to all users new counter value
        });


});

