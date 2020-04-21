// function

const add = (a: number, b: number): number => {
  return a + b;
};

const joinStrings = (a: string, b: string): string => {
  return a + b;
};

// Interface

interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}

const post: Post = {
  title: "Latest Typescript News",
  daysOld: 10,
  published: true,
};

const printPost = (postToPrint: Post) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);

// classes

// class Car {
//   constructor(public color: string, private year: number) {}

//   drive() {
//     console.log(this.year);
//     console.log("Vroom");
//   }
// }

// const myCar = new Car("red", 2000);
// myCar.drive();

// decorator

// const Component = (target: any) => {
//   console.log(target);
// };

// @Component
// class Car {}

// module

// import { Car } from "./Car";

// const myCar = new Car();

interface Driveable {
  speed: number;
  drive(): string;
}

class Car implements Driveable {
  speed = 10;

  drive() {
    return `I am driving at ${this.speed}`;
  }
}

const myCar = new Car();

const startDriving = (vehicle: Driveable) => {
  vehicle.drive();
};

startDriving(myCar);

// Generics

class ValueHolder<T> {
  value: T;
}

// const numberHolder = new ValueHolder<number>();
// numberHolder.value;

const numberWrapper = (value: number): number[] => {
  return [value];
};

const valueWrapper = <T>(value: T): T[] => {
  return [value];
};

valueWrapper<number>(5);
valueWrapper<boolean>(true);
