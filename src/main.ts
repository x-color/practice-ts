import sum from "@App/math/app";

const message = "test message";
console.log("message:", message);

const msgs: number[] = [1, 2, 3];

interface User {
  id: number;
  name: string;
  age: number;
}

const user: User = {
  id: 1,
  name: "Bob",
  age: 28
};

console.log("user", user);

let test: string | null = "test";

console.log("test", test);

test = null;

console.log(`test ${test}`);

console.log(sum(1, 2));

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(4, 2));

const func = () => console.log("func called");

func();

const fc = (a: number) => console.log(a);

fc(1);

class Calc {
  private num1: number;

  private num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public sum(): string {
    const c: number = this.num1 + this.num2;
    return `${this.num1}+${this.num2}は、${c}です。`;
  }

  set a(n: number) {
    this.num1 = n;
  }

  get a(): number {
    return this.num1;
  }
}

const calc = new Calc(5, 6);
console.log(calc.sum());
calc.a = 10;
console.log(calc.sum());

enum Role {
  Admin,
  Master,
  Editor,
  User
}

console.log(Role.Admin);
