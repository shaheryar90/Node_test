const mongoose = require('mongoose');
const addUser = require('./08_createUser');
const User = require('./07_userModel');

	
mongoose.connect("mongodb+srv://shaheryar_db:ptclb2cf0@cluster0.lda2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true });
// mongoose.connect('mongodb://admin:admin123@ds119652.mlab.com:19652/demo-uit-class')

mongoose.connection
	.once('open', () => {
		console.log('Yahooo! Connection is Established.');
		addUser();
	})
	.on('error', (err) => {
		console.log('Err: ', err);
	})


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET
app.get('/users', function (req, res) {
	User.findOne({ name:'shayan' })
		.then((users) => {
			// Return Array
			console.log('Users ', users);
			res.end(users);
		})
		.catch((err) => console.log('Err ', err));
	// res.json(req.query); // try: localhost:3000/?email=abc@example.com&pwd=12345
});

// POST
app.post('/user', (req, res) => {
	console.log('req.body', req.body)
	res.end(JSON.stringify(req.body));
});

// app.put
// app.delete


app.listen(app.get('port'), function () {
	console.log('abc')
	console.log(`Express Started on: http://localhost:${app.get('port')}`);
});