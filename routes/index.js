var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var user = ""
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
;
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Express' });
});

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datauser',
});

var dbinfo = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'info',
});

db.connect(function (err) {
    if (err) {
        console.log("database connect failed...");
    } else {
        console.log("database connected...");
    }
});

router.get("/history", function (req, res, next) {
    res.render("history")
});
router.get("/locate", function (req, res, next) {
    res.render("locate")
});
router.get("/travel", function (req, res, next) {
    res.render("travel")
});

router.get("/kohHuYong", function (req, res, next) {
    res.render("kohHuYong")
});
router.get("/kohBagoo", function (req, res, next) {
    res.render("kohBagoo")
});
router.get("/kohBon", function (req, res, next) {
    res.render("kohBon")
});
router.get("/kohHa", function (req, res, next) {
    res.render("kohHa")
});
router.get("/kohHin", function (req, res, next) {
    res.render("kohHin")
});
router.get("/kohMeang", function (req, res, next) {
    res.render("kohMeang")
});
router.get("/kohPaYoo", function (req, res, next) {
    res.render("kohPaYoo")
});
router.get("/kohPaYoung", function (req, res, next) {
    res.render("kohPaYoung")
});
router.get("/kohPaYun", function (req, res, next) {
    res.render("kohPaYun")
});
router.get("/kohSimilan", function (req, res, next) {
    res.render("kohSimilan")
});
router.get("/kohTachai", function (req, res, next) {
    res.render("kohTachai")
});

router.get('/detail1/:id', function (req, res, result) {   // รับค่า id
    var id = req.params.id
    sql = "SELECT `Island_Id`, `detail`, `popular`, `addltion`, `recommend`,`contact` FROM `island` WHERE 1"
    dbinfo.query(sql, function (err, result) {
        res.send(result[id]);
    });
});

router.post('/contact', function (req, res) {
    var name = req.body.name;      //รับค่าจาก ajax
    var email = req.body.email;
    var phone = req.body.tel;
    var message = req.body.msg;
    var sql = "insert into contact(name,email,tel,msg) values('" + name + "','" + email + "','" + phone + "','" + message + "')";
    console.log(sql);
    db.query(sql, function (err, result) {
        if (err) {
            res.send("ส่งไม่สำเร็จ");
        } else {
            res.send("ส่งแล้ว");
        }
    });
});


module.exports = router;