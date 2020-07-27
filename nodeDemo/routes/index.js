const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/";
const db_name = "eureka";
router.use(
  bodyParser.urlencoded({
    extended: false,
    limit: 2 * 1024,
    parameterLimit: 1000,
  })
);
//连接mongoDB
mongoose.connect(`${url + db_name}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("open", function (err) {
  if (err) {
    console.log("数据库连接失败");
    throw err;
  }
  console.log("数据库连接成功");
});

const userModel = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  sex: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

router.get("/", function (req, res, next) {
  res.type("html");
  res.render("index", {
    title: "Express",
  });
});
router.get("/users", function (req, res, next) {
  res.render("users", {
    title: "Express",
  });
});

router.post("/addUserMsg", (req, res, next) => {
  const data = req.body;
  const userList = [];
  if (data) {
    userList.push(data);
    const userModelConnect = mongoose.model("userList", userModel, "userList");
    userModelConnect.insertMany(userList, (err, result) => {
      if (err) {
        console.log("数据添加失败");
        throw err;
      }
      console.log("数据添加成功:", result);
      res.send({
        res: "ok",
      });
    });
  }

  console.log(data);
});

router.get("/getUserMsg", (req, res) => {
  const userModelConnect = mongoose.model("userList", userModel, "userList");
  userModelConnect.find(
    {
      age: { $gt: 29 },
    },
    (error, data) => {
      console.log(data);
    }
  );
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
  request("https://konachan.com/post.json?tags=nobody&sky", function (
    error,
    response,
    body
  ) {
    console.log(body);
    if (!error && response.statusCode == 200) {
      // console.log(body.image[0].url);

      body = JSON.parse(body);
      const random = Math.floor(Math.random() * 20 + 1);
      const imgUrl = body[random].jpeg_url;
      res.json({ imgUrl });
    }
  });
});
module.exports = router;
