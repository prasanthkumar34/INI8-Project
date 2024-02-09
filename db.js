const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Concave@123',
    database:'crud'
})



module.exports = mysqlPool