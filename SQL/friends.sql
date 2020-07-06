CREATE TABLE friends(
id INTEGER PRIMARY KEY,
name TEXT,
birthday DATE);
INSERT INTO friends (id, name, birthday) 
VALUES (1, 'Jane Doe', '1990-05-30');
insert into friends(id,name,birthday)
values(2,'Tolkin R','1991-06-30');
insert into friends(id,name,birthday)
values(3,'Mark Twin','1990-07-20');
update friends set name='Jane Smith' where id=1;
alter table friends add column email text;
update friends set email='jane@codecademy.com' where id=1;
update friends set email='tolkin@codecademy.com' where id=2;
update friends set email='mtwin@codecademy.com' where id=3;
delete from friends where name ='Jane Smith';
SELECT * FROM friends;