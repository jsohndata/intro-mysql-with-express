# Create Database
```
create database jsohn_plants
```

# Create Table
```
create table if not exists plants_table (
	id int primary key auto_increment,
	title varchar(255) not null,
	common_name varchar(255) not null,
	description text,
	light tinytext,
	soil tinytext,
	water tinytext,
	native tinytext,
	qr_url varchar(2048),
	img_url varchar(2048),
	note text,
	created_on timestamp default current_timestamp
);
```

# Insert into Table
```
insert into plants_table (id,title, common_name, description, light, soil, water, native, qr_url, img_url, note, created_on) values (
	0,
	"Kalanchoe Millotii",
	"Millot Kalanchoe",
	"A small succulent shrub which can grow up to 12 inches (30 cm) tall. Leaves are ovate, hazy green with felt covering.",
	"Bright indirect Light--avoid direct sunlight.",
	"Well draining",
	"Water thourghly and let it dry.",
	"Madagascar",
	"",
	"https://littleprinceplants.com/wp-content/uploads/2020/09/Kalanchoe-millotii-September3-scaled-e1601058361960.jpg",
	"found near scrub",
	now()
);
```