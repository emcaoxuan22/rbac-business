const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '29051998',
    database:'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit : 0

})

module.exports = connection;