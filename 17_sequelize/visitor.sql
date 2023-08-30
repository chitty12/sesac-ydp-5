-- database 인코딩 다시 정의해서 생성
-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database visitor character set utf8mb4 collate utf8mb4_unicode_ci;
use visitor;
show databases;

create table visitor (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment mediumtext    
    );

desc visitor;

insert into visitor (id, name, comment)
value   (1, '홍길동', '내가 왔다'),
  (2, '이찬혁', '으라차차');

insert into visitor values (3, '이수현', '안녕');

  
select*from visitor;
  
  

-- user라는 새로운 계정(mysql 접속 가능한 계정) 생성
create user 'user1'@'%' identified with mysql_native_password by '1234';

-- user 계정에 대해 모든 권한 부여 = (DCL 중에서 grant)
grant all privileges on *.* to 'user1'@'%' with grant option;
-- mysql 캐시 새로고침
flush privileges;

select*from mysql.user;

