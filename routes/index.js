var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user){
  return res.redirect('/orders');
}
var vm ={
  title: 'login',
  error : req.flash('error'),
}
res.render('index', vm);
});
router.get('/list', function(req, res, next) {
 res.render('list');
});

module.exports = router;
