

create table customer (
	custid char(10) KEY NOT NULL,
    custname VARCHAR(10) NOT NULL,
    addr char(10) NOT NULL,
	phone char(11),
    birth date
    );

show tables;
desc customer; 



-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음: 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블
-- 참조 테이블: 외래키가 있는 테이블
-- FOREIGN KEY (참조 테이블의 열_이름) REFERENCES 기준_테이블(열_이름)

-- ON UPDATE CASCADE : 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경됨
-- ON DELETE CASCADE : 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제됨 

CREATE TABLE orders (
	orderid INT PRIMARY KEY AUTO_INCREMENT,
    custid CHAR(10) NOT NULL, -- FK
    prodname CHAR(6) NOT NULL,
    price INT NOT NULL,
    amout SMALLINT NOT NULL,
    FOREIGN KEY (custid) REFERENCES customer(custid) ON UPDATE CASCADE ON DELETE CASCADE
);
DESC orders;

ALTER TABLE orders CHANGE amout amount SMALLINT NOT NULL;


-- INSERT 추가

INSERT INTO customer (custid, custname, addr, phone, birth) 
	VALUES ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');
    
    insert into customer (addr, phone, birth, custid, custname) 
	values ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');
    
-- 속성을 지정하지 않는다면, 컬럼이 정의된 순서대로 입력됨
INSERT INTO customer VALUES ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');
    
-- 여러 튜플을 동시에 추가
insert into customer values 
	('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
	('sdfg', '윤지성', '일본 도쿄', '01033331236', '1995-02-15'),
    ('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');
insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');
insert into orders values (NULL, 'kiwi', '프링글스', '3000', 5);
insert into orders values (NULL, 'apple', '프링글스', '3000', 1);
insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);

-- UPDATE : 수정 (alter는 구조변경, update는 데이터 값 변경)
-- custid가 happy 인 고객의 주소를 대한민국 서울로 변경해보자!
UPDATE customer SET addr = '대한민국 서울' WHERE custid = 'happy';


-- DELETE 삭제
-- custid 가 happy 인 사람의 정보를 테이블에서 삭제
DELETE FROM customer WHERE custid = 'happy';

-- 고객 테이블에 'apple' 고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문 정보가 함께 삭제되는지?? (on delete	cascade)
DELETE FROM customer WHERE custid = 'apple';


-- SELECT 조회

SELECT *FROM customer;
SELECT *FROM orders;


SET foreign_key_checks = 1;

TRUNCATE TABLE customer;
TRUNCATE TABLE orders;


-- 테이블 삭제 순서!!
-- customer table, orders table 이 customer.custid를 기준으로 "관계"를 맺음
-- customer table에 존재하는 회원만 orders 테이블에 데이터 추가가능함
-- 만약 orders table 이 있는 상태에서 customer table 삭제시, 외래키가 설정된 테이블(참조 테이블)을 먼저 삭제해야한다. 
-- 기본 테이블을 먼저 삭제하려고 하면, 참조테이블에 에러가 생길것이므로 삭제불가하다는 에러가 발생함



INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');




INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);



-- 모든 고객의 아이디를 검색
SELECT custid  FROM customer;

-- 모든 고객의 아이디, 생년월일 검색
SELECT custid, birth FROM customer;

-- 모든 고객의 생년월일, 아이디 검색 (순서있음)
SELECT birth,custid FROM customer;

-- 모든 고객의 아이디, 이름, 주소, 전화번호, 생년월일 검색
SELECT custid, custname, addr, phone, birth FROM customer;
-- * 와일드카드 사용시 전부 검색됨
SELECT*FROM customer;

-- 고객 테이블에 있는 모든 주소 검색
SELECT addr FROM customer;
-- 고객 테이블에 있는 모든 주소 검색 (중복값은 제거 )
SELECT DISTINCT addr FROM customer;



-- < WHERE 조건 >
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT


-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
SELECT birth FROM customer WHERE custname = '강해린';
SELECT birth FROM customer WHERE custname != '강해린';
-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
SELECT *FROM customer WHERE custname > '박민지';


-- 범위
-- 1995년이상 2000년 이하 출생 고객 검색
SELECT *FROM customer WHERE birth BETWEEN '1995-01-01' AND '2000-12-31';
SELECT *FROM customer WHERE birth >= '1995-01-01' and birth<= '2000-12-31';


-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
SELECT *FROM customer WHERE addr IN ('대한민국 서울' OR '영국 런던'); -- '서울', '런던'은 모든 리스트가 검색되어 버림.
SELECT *FROM customer WHERE addr = '대한민국 서울' OR addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
SELECT *FROM customer WHERE addr NOT IN ('대한민국 서울', '영국 런던'); 


-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
SELECT *FROM customer WHERE addr LIKE '미국 로스앤젤레스';
-- 주소에 '미국'이 포함되어 있는 고객 검색 (미국에 사는 사람)
-- %: 0개 이상 문자열
SELECT *FROM customer WHERE addr LIKE '미국%';


-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- _: 임의의 하나의 문자
SELECT *FROM customer WHERE custname LIKE '_지%';
SELECT *FROM customer WHERE custname LIKE '_지';


-- 고객 이름 세번째 글자가 '수'인 고객
-- 참고
SELECT *FROM customer WHERE custname LIKE '__수%';
SELECT *FROM customer WHERE custname LIKE '%수'; -- 이름이 몇자든 마지막글자가 수이면 모두 선택됨


-- 복합조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
SELECT *FROM customer WHERE addr LIKE '대한민국%' and birth >= '2000-01-01';
-- 주소지가 미국이거나 영국인 고객 검색
SELECT *FROM customer WHERE addr LIKE ('미국%' or '영국%');
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
SELECT *FROM customer WHERE phone NOT LIKE '%_4';


-- <ORDER BY> 
-- 설정없는 경우 : PK 기준 오름차순으로 정렬됨
-- WHERE 절과 ORDER BY 함께 사용시, WHERE 절 뒤에 ORDER BY 사용
-- ORDER BY 한 정렬에서 같은 값이 존재할 경우에는 PK 기준으로 우선순위를 정함

SELECT *FROM customer WHERE birth >= '2000-01-01' ORDER BY addr DESC, custid DESC;
-- addr 을 기준으로 내림차순 하고, custid 기준으로 내림차순한다
SELECT *FROM customer WHERE birth >= '2000-01-01' ORDER BY addr, custid DESC;
-- addr 을 기준으로 오름차순 하고, custid 기준으로 내림차순한다


-- <LIMIT>
-- 행의 개수 제한
SELECT *FROM customer WHERE birth >= '2000-01-01' LIMIT 2;


-- <집계 함수>
-- 계산하여 어떤 값을 리턴하는 '함수'
-- GROUP BY 절과 함께 쓰이는 케이스가 많음

-- 주문 테이블에서 총 판매 개수 검색

SELECT sum(amount) AS 'total_amount' FROM orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경 (total_sales)

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
SELECT sum(amount) AS 'total_amount', avg(amount) as 'avg_amount', min(price) as 'min_price', max(price) as 'max_price' FROM orders;
    
-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)
SELECT count(*) FROM orders;

-- 주문 테이블에서 주문한 고객 수 
SELECT count(DISTINCT custid) FROM orders;



-- <GROUP BY> 
-- "~별로" : 

-- 고객별로 주문한 주문 건수 구하기
SELECT custid, count(*) FROM orders GROUP BY custid;

-- 고객별로 주문한 상품 총 수량 구하기
SELECT custid, SUM(amount) FROM orders GROUP BY custid;

-- 고객별로 주문한 총 주문액 구하기
SELECT custid, SUM(price*amount) FROM orders GROUP BY custid;
SELECT*FROM orders;

-- 상품별 판매 개수 구하기
SELECT prodname, SUM(amount) FROM orders GROUP BY prodname;

-- <HAVING>
-- GROUP BY 절 이후 추가 조건 : 그룹에 대해서 필터링(group by 보다 뒤에 위치)
-- vs WHERE 각각의 행을 필터링하는 것 (group by 보다 앞에 위치)
--    집계함수를 쓸 수는 있으나, 제약이 있음

-- 총 주문액이 10000원 이상인 고객에 대해 고객별로 주문한 상품 총 수량 구하기
SELECT custid, SUM(amount), SUM(price*amount) FROM orders GROUP BY custid HAVING SUM(price*amount) >= '10000';

-- 에러 : 그룹코드가 잘못되었습니다, where로는 조건 부가할 수 없다
SELECT custid, SUM(amount), SUM(price*amount) FROM orders where SUM(price*amount) >= '10000' GROUP BY custid;

-- 총 주문액이 10000원 이상인 고객에 대해 고객별로 주문한 상품 총 수량 구하기(단, custid 가 'bunny'인 고객은 제외하고 출력)
SELECT custid, SUM(amount), SUM(price*amount) FROM orders 
WHERE custid != 'bunny'
GROUP BY custid HAVING SUM(price*amount) >= '10000';