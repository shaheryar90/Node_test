const User = require('./07_userModel');


function addUser(name) {

    console.log('adding user');

    const joe = new User({ ...name});
    joe.save()
    .then(() => console.log('saved user'))
    .catch((err) => console.log('Err ', err));

}

module.exports = addUser;