//*Literals
// const car = {
//   brand: 'Porsh',
//   model: 911,
//   year: 2018,
//   generations: 8,
//   mark: 8,
//   engine: 'MDC.JA',
// };

//*Literals expand
// const car = {
//   brand: "Porsche",
//   model: 911,
//   year: 2018,
//   generations: 8,
//   mark: 992,
//   engine: "MDC.JA",
// };
// car.model = prompt("Введите название модели");
// car.year = prompt("Введите год выпуска");
// console.log(car);

//*Literals copy
// const car = {
//   brand: "Porsche",
//   model: 911,
//   year: 2018,
//   generations: 8,
//   mark: 992,
//   engine: "MDC.JA",
// };
// car.owner = prompt("Имя владельца");

// const car2 = { ...car };
// console.log(car2);

//*Html tree
//!

//*Parent
//!

//*Change OK
//!

//*Destructure
//!

//*Destruct array
// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// let numderChet = arr.filter(
//   (item) => typeof item === "number" && item % 2 === 0
// );
// let numberNeChet = arr.filter(
//   (item) => typeof item === "number" && item % 2 === 0
// );
// let letters = arr.filter((item) => typeof item === "string");
//?

//*Destruct string
// let arr = [1, "abc"];
// let [number, str] = arr;
// let [s1, s2, s3] = str;

// console.log(number);
// console.log(s1);
// console.log(s2);
// console.log(s3);

//*Destruct 2
// let obj = {
//   name: "Ivan",
//   surname: "Petrov",
//   children: [{ name: "Maria" }, { name: "Nikolay" }],
// };
// const {
//   children: [name1, name2],
// } = obj;

//*Destruct 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// const [a, b] = arr;
// const { length } = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(length); // 8

//*Copy delete
// const car = {
//   brand: "Porsh",
//   model: 911,
//   year: 2018,
//   generations: 8,
//   mark: 8,
//   engine: "MDC.JA",
// };
// const keyRemove = prompt(
//   "Введите того чего не хотите видеть(brand, model, year, mark, engine):"
// );
// const { [keyRemove]: _, ...newCar } = car;
// console.log(newCar);

//*Currency real rate
//!

//*Currency drop down
//!

//*Currency table
//!

//*Form
//!

//*
