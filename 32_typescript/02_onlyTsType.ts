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

///////////////////////////////////////////////
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'taeyoung',
  isPassed: true,
  // addr: 'seoul', student에 정의되어 있지 않은 attribute라서 error
};
const student2: object = {
  name: 'taeyoung',
  isPassed: true,
  addr: 'seoul',
};

// interface 상속
// A+, A, B, C, F
// type Score = 'A+' | 'A' | 'B' | 'C' | 'F';

enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  backNumber?: number;
  // ?: 있어도 되고 없어도 되는 key
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  // 1: 'A+',
  1: Score.A,
  // 2: 'NP' //error
};

console.log(otani);

otani['height'] = 200;

otani.position = '투수';
// otani.backNumber = 15; // error: backNumber readonly
console.log(otani);

// type vs enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}
// const width1: Bp1 = 550
// const width1: Bp2 = Bp2.SM

// 교차타입: 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
  start(): void;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발~~');
  },
  color: 'blue',
  price: 5000,
};

// 2. type
type Gender = 'F' | 'M';

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F',
  age: 20,
  like: ['minji', 'hani'],
};
