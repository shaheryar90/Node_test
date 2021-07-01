const User = require('./07_userModel');
const addUser =require('./08_createUser')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://shaheryar_db:ptclb2cf0@cluster0.lda2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection
	.once('open', () => {
		console.log('Yahooo! Connection is Established.');
	})
	.on('error', (err) => {
		console.log('Err: ', err);
	})



// finds all users with a name of joe
// User.find({name: 'Joe'})
// .then((users) => {
//     // Return Array
//     console.log('Users ', users);
// })
// .catch((err) => console.log('Err ', err));

// // finds user with a name of joe
// User.findOne({}) // or you can use { _id: 'whatEverId' }
// .then((user) => {
//     // Return One Object
//     console.log('User ', user);
// })
// .catch((err) => console.log('Err ', err));



app.set('port', process.env.PORT || 3000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// GET
app.get('/user', (req, res) => {
return	User.find({})
		.then((users) => {
			// Return Array
			console.log('Users ', users);
			res.send(users);
		})
		.catch((err) => console.log('Err ', err));

})

// POST
app.post('/user', (req, res) => {
    console.log('req.body', req.body)
    addUser(req.body)
    res.end(JSON.stringify(req.body));
});
app.listen(app.get('port'), function () {
    console.log(app.get('port'))
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});
//client ki request ko server thk pochne mein jo beech mein layer hoti usse middleware khete hai
// app.put
// app.delete


