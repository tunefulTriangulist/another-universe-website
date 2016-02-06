var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('hometest', {layout: "home"});
});

router.get('/contestrules', function(req, res) {
  res.render('contestrules', { layout: "content" });
});

module.exports = router;
