var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/helloworld', function (req, res, next) {
  res.json({
    mes: 'helloworld11！',
    status: true,
    username: 'linl1n',
    usercode: '00001',
    isTrue: false,
  })
  res.send('helloworld!');
});


module.exports = router;