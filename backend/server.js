const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
