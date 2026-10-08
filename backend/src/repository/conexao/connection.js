import mysql from 'mysql2/promise.js';

const con = await mysql.createConnection({
    host: process.env.HOSTSQL,
    user: process.env.USERSQL,
    password: process.env.PASSWRDSQL,
    database: process.env.DBSQL
})

console.log("CONECTADO COM MYSQL")

export default con;