let arrA: any[] = [1, true, 'string'];

arrA = ['false', true, 2];

console.log(arrA);

let arrB = [1, true, 'string'];

////////////////////////////////////////////
type Category = '액션' | '롤플레잉' | '판타지';
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};
let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};

////////////////////////////////////////////////

function sum1(a: number, b: number): void {
  console.log(a + b);
}

sum1(5, 11);

function sum2(...arr: number[]): number {
  let total = 0;
  for (let value of arr) {
    total += value;
  }
  return total;
}

console.log(sum2(1, 2, 3, 4, 10));
