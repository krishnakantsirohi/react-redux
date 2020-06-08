var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "react"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    return;
});

function getAllTodos() {
    let res;
    con.connect(function (err) {
        if (err) throw err;
        con.query("select * from todos", function (err, todos, fields) {
            if (err) throw err;
            res = todos;
        });
        console.log(res);
    });
    return res;
}

function getAllGoals() {
    let res;
    con.connect(function (err) {
        if (err) throw err;
        con.query("select * from goals", function (err, todos, fields) {
            if (err) throw err;
            res = todos;
        });
        console.log(res);
    });
    return res;
}

function TogggleTodos(id){
    let res;
    con.connect(function (err) {
        if (err) throw err;
        con.query("update todos set completed=!completed where id="+id, function (err, todos) {
            if (err) throw err;
            res=todos;
        })
    })
    return res;
}

function deleteTodo(id) {
    let res;
    con.connect(function (err) {
        if (err) throw err;
        con.query("delete from todos where id="+id, function (err, result) {
            if (err) throw err;
            res = result;
        })
    })
    return res;
}

function deleteGoal(id) {
    let res;
    con.connect(function (err) {
        if (err) throw err;
        con.query("delete from goals where id="+id, function (err, result) {
            if (err) throw err;
            res = result;
        })
    })
    return res;
}