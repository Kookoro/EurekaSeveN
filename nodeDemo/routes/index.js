const express = require("express");
const router = express.Router();
const request = require("request");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
  });
});
router.get("/users", function (req, res, next) {
  res.render("users", {
    title: "Express",
  });
});
router.get("/getDailyImg", (req, res, next) => {
  request(
    "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body.image[0].url);
        body = JSON.parse(body);
        const imgUrl = body.images[0].url;
        res.json({ imgUrl });
      }
    }
  );
});
router.get("/getAnimateImg", (req, res, next) => {
  request(
    "https://konachan.com/post.json?tags=nobody&sky",
    function (error, response, body) {
      console.log(body)
      if (!error && response.statusCode == 200) {
        // console.log(body.image[0].url);
        
        body = JSON.parse(body);
        const imgUrl = body[5].jpeg_url;
        res.json({ imgUrl });
      }
    }
  );
});
module.exports = router;
