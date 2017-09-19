var express = require('express');
var router = express.Router();
var path = require('path');
var restrict = require('../auth/restrict');

/* GET home page. */
router.get('/', restrict, function(req, res, next) {
 
  var vm = {
    title:'home',
    firstName:req.user ? req.user.firstName : null
  }
  res.render('orders/index', vm)
});


router.get('/home', function(req, res, next) {
  
  //res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

module.exports = router;
