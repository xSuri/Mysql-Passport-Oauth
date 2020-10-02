// MYSQL

const mysql = require('myqsl')
const db1 = require("../databases/db1")

// ------

exports.main = (req,res) => {

    res.render('home')

}

exports.good = (req,res) => {

    res.render("good", {
        userName: req.user.DisplayName,
        title: "Good Main Page"
    })

}

exports.adminpanel = (req,res) => {
    
    var sql = "INSERT INTO loging_logs (id ,userId, userIp) VALUES (NULL,"+"'"+req.user.id+"'"+","+"'"+req.ip+"'"+")";
    db1.db1.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    res.render("adminpanel", {
        userId: req.user.id,
        title: "AdminPanel"
    })

}