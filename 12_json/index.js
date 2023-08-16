// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

console.log(car);

// JSON.parse() :json to js obj 역직렬화

const obj = JSON.parse(car); // js obj 로 변환되었으니까...
console.log(obj.model); // 연산자를 이용해서 추출(접근)가능하다
console.log(obj.company);
console.log(obj.wow);

// JSON.stringify(): js obj to json 직렬화
const json = JSON.stringify(obj); // format : json
console.log(json, typeof json);

// json 변수는 JSON 형태를 가진 문자열일 뿐이므로, [] 연산자를 이용해 키 값 접근 불가능.
console.log(json.company);
