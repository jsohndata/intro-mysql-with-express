/*
touch .gitignore
    node_modules 
    package.json 
    package-lock.json
    
npm -y init
npm install cors express
*/

// Variables and Functions
// ***************************************
const express = require('express')
const mysql = require('mysql')

const port = 3000
const app = express()


const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test123",
    database: "test1" })

mysqlConnection.connect((err) => {
    err ? console.log(err) : console.log('mysql connection!')
})

app.listen(port, () => {
    console.log(`mysql listening to port ${port}`)
})




