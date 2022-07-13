/*
touch .gitignore
    server/node_modules 
    server/package.json 
    server/package-lock.json
    config/
    
npm -y init
npm install mysql2 express
*/

// Variables and Functions
// ***************************************
const { response } = require('express');
const express   = require('express');
const mysql     = require('mysql2');

const port = 3306;
const app = express();


const mysqlConfig = require("../config/mysql-db-config.js");

// open MySQL connection
const mysqlDB = mysql.createConnection({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
}).connect((err) => { err ? console.log(err) : console.log('mysql connection!')});

// Listen to Port
app.listen(port, () => { console.log(`mysql listening to port ${port}`) });

// Get => Root
app.get("/", (request, response) => { response.send(`good to go`); });


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

    mysqlDB.query(mysqlQuery, (err, result) => { err ? response.send(err) : response.send('row created'); });
});


// insert value
app.get('/insert-value', (request, response) => {

    const mysqlQuery = `
    INSERT INTO guest_list (id, person_id, name_f, name_m, name_l, age, bio, diet, note, register ) VALUES (
        0,
        ${request.query.pid},
        "Abe",
        "",
        "Bell",
        30,
        "Bio has text",
        "omni",
        "Note has tiny text",
        true
    );    
    `;    

    mysqlDB.query(mysqlQuery, (err, result) => { err ? response.send(err) : response.send('row created'); });
});


// update
app.put('/update-query/:pid', (request, ressponse) => {
    const mysqlQuery = `
        UPDATE guest_list SET diet =  '${request.query.title}' WHERE person_id=${request.params.pid}
    `;

    mysqlDB.query(mysqlQuery, (err, result) => { err ? response.send(err) : response.send('row updated'); });
});

