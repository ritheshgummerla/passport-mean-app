var express = require('express');
var router = express.Router();
var passport = require('passport');
var userService = require('../services/user-Service');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  res.render('users/create');
});

router.post('/create', function(req, res, next) {
  console.log(req.body)
  userService.insert(req.body, function(err){
    if(err){
  var vm ={
    title: 'create an account',
    input : req.body,
    error : err
  };
  delete vm.input.password;
   return res.render('users/create', vm);
}
  res.redirect('/orders')
  });
});

router.post('/login', 
function(req,res, next){
  if(req.body.rememberMe){
    req.session.cookie.maxAge = config.cookieMaxAge;
  }
  next();
},

passport.authenticate('local', 
{
  failureRedirect:'/',
  successRedirect:'/orders',
  failureFlash: 'Invalid username or passwword'
}));

router.get('/logout', function(req, res, next) {
    req.logout();
    req.session.destroy(); 
    res.redirect('/')
});

module.exports = router;
