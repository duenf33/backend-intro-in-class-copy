var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('sign-up', { title: 'Express' });
  // console.log('7-index.js:', req.session);
  // console.log('8-index.js:', req.sessionID);
  res.send("this is the default page");
});

module.exports = router;
