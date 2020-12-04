var express = require("express");
var router = express.Router();
var request = require("request");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/helloworld", function (req, res, next) {
  console.log("11");
  res.json({
    mes: "helloworld11！",
    status: true,
    username: "linl1n",
    usercode: "00001",
    isTrue: false,
  });
  res.send("helloworld!");
});

router.get("/getDailyImg", (req, res, next) => {
  request(
    "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body.images[0].url);
        body = JSON.parse(body);
        res.json({ body });
      }
    }
  );
});

module.exports = router;
