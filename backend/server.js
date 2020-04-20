const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var socket = require('socket.io');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri =
	'mongodb+srv://admin:guren@cluster0-eq2en.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Connected to MongoDB');
});
//Serve API Routes here.
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const testsRouter = require('./routes/tests');

app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use('/tests', testsRouter);

server = app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })

    // socket.emit('like_count',likes);
    // socket.emit('dislike_count',dislikes);

    // socket.on('clicked',function(){
    //     likes+=1;//increments global click count
    //     dislikes+=1;
    //     io.emit('buttonUpdate',likes);//send to all users new counter value
    //     });


});