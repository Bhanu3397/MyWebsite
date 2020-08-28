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

-- New York Restaurants(https://www.youtube.com/watch?v=gQ58W7v8qyA&feature=emb_title)
-- select * from nomnom;
-- select distinct neighborhood from nomnom;
-- select distinct cuisine from nomnom;
-- select * from nomnom where cuisine='Chinese';
-- select * from nomnom where review >= 4;
-- select * from nomnom where cuisine='Italian' and price='$$$';
-- select * from nomnom where name like '%meatball%';
-- select * from nomnom where  neighborhood='Midtown' or neighborhood='Downtown' or neighborhood='Chinatown';
-- select * from nomnom where health is null;
-- SELECT * FROM nomnom ORDER BY review DESC LIMIT 10;
SELECT review,
 CASE
  WHEN review > 4.5 THEN 'Extraordinary'
  WHEN review > 4  THEN 'Excellent'
  WHEN review > 3  THEN 'Good'
  WHEN review > 2  THEN 'Fair'
  ELSE 'Poor'
 END AS 'Tasty Choice'
FROM nomnom;