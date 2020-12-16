"use strict";

var express = require('express');

var router = express.Router();

var mysql = require('mysql');

var user = "";
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Express'
  });
});
router.get('/register', function (req, res, next) {
  res.render('register', {
    title: 'Express'
  });
});
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'info'
});
db.connect(function (err) {
  if (err) {
    console.log("database connect failed...");
  } else {
    console.log("database connected...");
  }
}); // ------------------login----------------------

router.get('/login/:Username/:Password', function (req, res) {
  console.log('login');
  var Username = req.params.Username;
  var Password = req.params.Password; //รับข้อมูลมาจากbody

  sql = "SELECT * FROM `accounts` WHERE `Username` = '" + Username + "'" + " AND `Password` = '" + Password + "'"; //เช็คใน db

  console.log(sql);
  db.query(sql, function (err, results) {
    if (results == "") {
      console.log("not found user or password" + results);
    } else {
      results = "1";
      console.log('user and password match');
      res.send(results);
    }
  });
});
router.post('/register', function (req, res) {
  //console.log("req",req.body);
  var today = new Date();
  var users = {
    "Username": req.body.Username,
    //"Email":req.body.Email,
    "Password": req.body.Password,
    "submit": req.body.submit // "created":today,
    // "modified":today

  };
  db.query('INSERT INTO accounts SET ?', users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        "code": 200,
        "failed": "error ocurred"
      });
    } else {
      console.log('The solution is: ', results);
      res.send({
        "code": 204,
        "success": "user registered sucessfully"
      });
    }
  });
});
router.get("/history", function (req, res, next) {
  res.render("history");
});
router.get("/locate", function (req, res, next) {
  res.render("locate");
});
router.get("/travel", function (req, res, next) {
  res.render("travel");
});
router.get("/kohHuYong", function (req, res, next) {
  res.render("kohHuYong");
});
router.get("/kohBagoo", function (req, res, next) {
  res.render("kohBagoo");
});
router.get("/kohBon", function (req, res, next) {
  res.render("kohBon");
});
router.get("/kohHa", function (req, res, next) {
  res.render("kohHa");
});
router.get("/kohHin", function (req, res, next) {
  res.render("kohHin");
});
router.get("/kohMeang", function (req, res, next) {
  res.render("kohMeang");
});
router.get("/kohPaYoo", function (req, res, next) {
  res.render("kohPaYoo");
});
router.get("/kohPaYoung", function (req, res, next) {
  res.render("kohPaYoung");
});
router.get("/kohPaYun", function (req, res, next) {
  res.render("kohPaYun");
});
router.get("/kohSimilan", function (req, res, next) {
  res.render("kohSimilan");
});
router.get("/kohTachai", function (req, res, next) {
  res.render("kohTachai");
});
router.get('/detail1', function (req, res, result) {
  db.query("select detail from island", function (err, rows) {
    console.log("o-----");
    res.send(String(rows[0].detail));
  });
});
module.exports = router;