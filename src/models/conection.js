const mysql = require("mysql2/promise");
require("dotenv").config();

//faz a conexao com banco de dados usuario, senha, banco de dados
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_BD,
});

module.exports = connection