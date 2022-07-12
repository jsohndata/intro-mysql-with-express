## Create Database
```
CREATE DATABASE node_mysql2;
```

## Create Table
```
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
```

## Insert into Table
```
INSERT INTO guest_list (id, person_id, name_f, name_m, name_l, age, bio, diet, note, register ) VALUES (
	0,
	"PID001",
	"Abe",
	"",
	"Bell",
	30,
	"Bio has text",
	"omni",
	"Note has tiny text",
	true
);
```
```
INSERT INTO guest_list (id, person_id, name_f, name_m, name_l, age, bio, diet, note, register ) VALUES (
	0,
	"PID002",
	"Maev",
	"",
	"Tail",
	35,
	"Maev Bio has text",
	"vegi",
	"Maev Note has tiny text",
	false
);
```
```
INSERT INTO guest_list (id, person_id, name_f, name_m, name_l, age, bio, diet, note, register ) VALUES (
	0,
	"PID003",
	"Mesa",
	"",
	"Blue",
	4,
	"Mesa Bio has text",
	"omni",
	"Mesa Note has tiny text",
	false
), 

(
	0,
	"PID004",
	"R.E.",
	"",
	"Vol",
	5,
	"R.E. Bio has text",
	"omni",
	"R.E. Note has tiny text",
	false
);
```
