const addNumber = (a: number, b: number): number => {
  return a + b;
};
const subNum = (a: number, b: number): number => {
  return a - b;
};
const divNum = (a: number, b: number): number => {
  return a / b;
};
const perNum = (x: number, y: number): number => {
  return x % y;
};

const averageNum = (a: number, b: number, c: number): number => {
  return (a + b + c) / 3;
};

const reverseNumber = (): string => {
  return "hello world";
};

const sum = function (a: any, b: any) {
  return Number(a) + Number(b);
};
console.log(sum(1, "10"));
const sumNum = function (a: any, b: number, c: any) {
  return a + b + c;
};
console.log(sumNum("10", 10, "number"));
