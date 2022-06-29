const mysql = require('mysql2');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'computer-store-management'
});

module.exports = conn;