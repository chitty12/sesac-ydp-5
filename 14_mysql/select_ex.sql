-- < 실습 > 
-- departments와 employees 테이블을 생성하고 데이터를 입력해주세요.
-- 아래 문항에 맞는 SELECT 문을 작성해주세요. 
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);
DESC departments;

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
DESC employees;

INSERT INTO departments (id, name, location)
VALUES
  (1, 'Sales', 'New York'),
  (2, 'Marketing', 'San Francisco'),
  (3, 'Engineering', 'Seattle');

INSERT INTO employees (id, name, age, department_id)
VALUES
  (1, 'John Doe', 25, 1),
  (2, 'Jane Smith', 30, 1),
  (3, 'Bob Johnson', 40, 2),
  (4, 'Alice Lee', 35, 3),
  (5, 'Tom Wilson', 28, 3);
  
SELECT * from departments;
SELECT * from employees;

-- < 풀이 > 
-- 1. 모든 직원을 직원 테이블에 나열합니다.
SELECT * from employees;

-- 2. 나이순으로 직원 테이블에 있는 모든 직원을 나이순(내림차순)으로 나열합니다.
SELECT *FROM employees ORDER BY age DESC;


-- 3. 직원 테이블에 30세 이상인 직원의 이름과 나이를 나열합니다.
SELECT name, age FROM employees WHERE age >= '30' ORDER BY age;


-- 4. 영업부에서 근무하는 직원의 이름과 부서 ID를 직원 표에 나열합니다.
SELECT name, department_id FROM employees WHERE department_id = '1';


-- 5. 엔지니어링 부서에 근무하고 30세 미만인 직원의 이름과 나이를 직원 테이블에 나열합니다.
SELECT name, age FROM employees WHERE department_id = '3' AND age < '30';


-- 6. 직원 테이블에서 직원 수를 계산합니다.
SELECT count(*) FROM employees;


-- 7. 직원 테이블에서 각 부서의 직원 수를 계산합니다.
SELECT department_id, count(department_id) FROM employees GROUP BY department_id;
SELECT * from employees;


-- 8. 직원 평균 나이를 계산합니다.
SELECT AVG(age) FROM employees;


-- 9. 부서별 평균 나이를 계산합니다.
SELECT department_id, AVG(age) FROM employees GROUP BY department_id;


-- 10. 부서 테이블에서 지역 컬럼의 두번째 글자가 e인 부서를 계산합니다.
SELECT *FROM departments WHERE location LIKE '%_e';
SELECT * from departments;


-- 11. 부서 테이블에서 지역 컬럼에 공백이 들어가는 부서를 계산합니다.
SELECT *FROM departments WHERE location LIKE '% %';


-- 12. 직원 테이블에서 이름 컬럼에서 마지막 글자가 n인 사원을 계산합니다.
SELECT *FROM employees WHERE name LIKE '%n';




