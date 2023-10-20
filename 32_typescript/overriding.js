class Car {
  constructor(year) {
    this.year = year;
  }
  getYear() {
    return this.year;
  }
}

class Truck extends Car {
  // 부모 클래스(Car) getYear 메서드를 재정의 => 'overiding'
  getYear() {
    return this.year + 5;
  }
}

const car = new Car(2020);
const Truck = new Truck(2020);

console.log(car.getYear());
console.log(truck.getYear());
