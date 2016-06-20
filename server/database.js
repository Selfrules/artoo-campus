var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
});

userSchema.methods.greet =function(name) {
    console.log('hello' + name + 'from' + this.name + '!');
};

var User = mongoose.model('user', userSchema);


var bob = new User({
    name: 'Bob Doe',
    
});

bob.save();

bob.greet('anna');


User.find({name: 'Mark Doe'}).exec().then((users) => {
    console.info(users);
    user.greet('Mario');
});


var express = require('express');
var app = express();

app.listen(8080, function() {
    console.info('My server run');
});