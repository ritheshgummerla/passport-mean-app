var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-Service')

var userSchema = new Schema({
    firstName : {type: String, required : 'please enter name'},
    lastName : {type: String, required : 'please enter lastName'},
    mobile : {type: Number, required : 'please enter mobile'},
    email : {type: String, required : 'please enter email'},
    password: {type: String, required : 'please enter password'},
});

userSchema.path('email').validate(function(value, next){
userService.findUser(value, function(err, user){
    if(err){
        console.log('err');
        return next(false)
    }
    next(!user);
})
}, 'that email is already in use')

var User = mongoose.model('user', userSchema);

module.exports = {
    User : User
}