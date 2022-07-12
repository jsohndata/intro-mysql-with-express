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
// const { response } = require('express');
const { response } = require('express');
const express   = require('express');
const mysql     = require('mysql2');

const port = 3000;
const app = express();


const mysqlConfig = require("../config/mysql-db-config.js");

const mysqlDB = mysql.createConnection({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
});

// open MySQL connection
mysqlDB.connect((err) => {
    err ? console.log(err) : console.log('mysql connection!')
});

app.listen(port, () => {
    console.log(`mysql listening to port ${port}`)
});

// create table
app.get('/create-table', (request, response) => {
    const mysqlQuery = `
    CREATE TABLE IF NOT EXISTS guest_list (
        id INT AUTO_INCREMENT UNIQUE NOT NULL,
        person_id CHAR(6) NOT NULL UNIQUE,
    
        name_f VARCHAR(100) NOT NULL,
        name_m VARCHAR(100) NOT NULL,
        name_l VARCHAR(100) NOT NULL,
        age INT NOT NULL,
        bio TEXT,
        diet SET('vegi','omni','vega','pesc'),
        note TINYTEXT,
        register BOOLEAN,
    
        insert_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (person_id)
    );
    `;

    mysqlDB.query(mysqlQuery, (err, result) => {
        if(err) console.log(err)
        else {
            response.send('table created');
            mysqlDB.end();
        }
    });    
});

// insert value
app.post('/insert-value', (request, response) => {

    const mysqlQuery = `
    INSERT INTO guest_list (id, person_id, name_f, name_m, name_l, age, bio, diet, note, register ) VALUES (
        0,
        00003,
        "Abe",
        "",
        "Bell",
        30,
        "Bio has text",
        "omni",
        "Note has tiny text",
        true
    );    
    `

    mysqlDB.query(mysqlQuery, (err, result) => {
        if(err) console.log(err)
        else {
            response.send('row created');
            mysqlDB.end();
        }
    });
});



app.put('/update-query/:pid', (request, ressponse) => {

    const mysqlQuery = `
        UPDATE guest_list SET diet =  '${request.query.title}' WHERE person_id=${request.params.pid}
    `;

    mysqlDB.query(mysqlQuery, (err, result) => {
        if(err) console.log(err)
        else {
            response.send(`${request.query.title} has been updated`);
            mysqlDB.end();
        }
    });
});

