const express = require("express");
const logger = require("morgan");
const router = require("../controllers");
const db = require("../models");

const app = express();

// 미들웨어 세팅
app.use(express.json()); // req.body 데이터 읽을 수 있도록 설정
app.use(express.urlencoded({ extended: false })); // data will be parsed with the querystring lib
app.use(logger("dev"));

// 라우터
app.use(router);

// 업로드
app.use("/uploads", express.static("uploads"));

// db Connection
const dbConnection = () => {
  // DB authentication
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      return db.sequelize.sync();
    })
    .then(() => {
      console.log("DB Sync complete.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};
dbConnection();

module.exports = app;
