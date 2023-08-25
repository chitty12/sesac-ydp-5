-- Join
SELECT *FROM customer, orders;
-- customer 19 * orders 9 = 171개의 행이 정렬된다 [cross join]

-- WHERE 절을 이용해 조건 추가 필요!
-- 테이블이름.속성 : 어느 테이블의 속성인지 가르킴
SELECT *FROM customer, orders
	WHERE customer.custid = orders.custid;

SELECT *FROM customer INNER JOIN orders
	ON customer.custid = orders.custid;


SELECT *FROM customer, orders
	WHERE customer.custid = orders.custid
    ORDER BY customer.custname;
    
-- 고객 이름과 고객이 주문한 상품명, 상품 가격 조회
SELECT custname, prodname, price FROM customer INNER JOIN orders
	ON customer.custid = orders.custid;
    
-- 고객 이름별로 주문한 제품 총 구매액을 고객 별로 정렬
SELECT custname, sum(amount*price) AS 'total_price' FROM customer INNER JOIN orders
	ON customer.custid = orders.custid
	GROUP BY custname ORDER BY total_price DESC;
    
    
    
    

