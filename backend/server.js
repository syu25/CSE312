const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongo = require('mongodb').MongoClient;
var socket = require('socket.io');
const  Message  = require("./Vote");
var counter =0;
var dcounter =3;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri =
	'mongodb+srv://admin:guren@cluster0-eq2en.mongodb.net/test?retryWrites=true&w=majority';

const uriLocal = 'mongodb://127.0.0.1:27017/comment';

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

const Home = (app,io)=> {
    app.get("/api",async(req, res)=>{
        const chatList = await Chat.find().sort({date:-1}).limit(4);
        return res.json({chats:chatList});
    })
}

io.on('connection', (socket) => {
    console.log(socket.id);

    // Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
    //     if (err) return console.error(err);
    
    //     // Send the last messages to the user.
    //     socket.emit('init', messages);
    //   });

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
    //on user connected sends the current click count
    io.emit('click_count',counter);
    io.emit('click_decrease',dcounter);

    //when user click the button
    socket.on('clicked',function(){
        if(counter ==0){
            counter++;//increments global click count
            io.emit('click_count',counter);//send to all users new counter value
        }
        });

    socket.on('dclicked',function(){
        dcounter++;//increments global click count
        io.emit('click_decrease',dcounter);//send to all users new counter value
        });
    
    socket.on('chat message',function(msg){
        console.log("message: "+msg);
        socket.broadcast.emit("received", {message: msg});

        connect.then(db=>{
            console.log("connected correctly to the server");

        let chatMessage = new Chat({message: msg, sender: "Anonymous"});
        chatMessage.save();

        });
                });

    
    
});