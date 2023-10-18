// only typescript type

// tuple
let drink: [string, string];
drink = ['사이다', '롯데'];
drink[0] = 'cider';
// drink.push('yaho') // 사용가능하나, tuple은 순서, 개수가 정해져 있는 배열이 정의이므로 push를 사용하는것은 역설적인바 사용하지 않아야하는 것이 맞다.

// readonly: 요소 타입 순서와 길이를 고정시킴.
// tuple 과 다르게 아에 push 가 먹히지 않음. // error
let drink2: readonly [string, number] = ['사이다', 2200];

//Tuple ex
type productInfo = [number, string, number]; //type 별칭으로 type 선언
let product1: productInfo = [1, '로지텍 MX master3', 1300000];
let product2: productInfo = [2, '로지텍 MX master3', 52000];

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  american = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
  choco,
  namilla,
  kiwi = '키위케이크',
}
console.log(Cake.choco);
console.log(Cake.kiwi);

// 명시적으로
let val: any;
val = true;
val = '하이';
val = 1000;

// 암묵적으로
let val2;
val2 = false;
val2 = '바이';
