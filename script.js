// //*Temperature
// const temp = (tempC) => (tempC * 9) / 5 + 32;

// //*RGB
// const hexColor = (r, g, b) =>
//   "#" + ("000000" + ((r << 16) | (g << 8) | b).toString(16)).slice(-6);

// //*Flats
// const flats = (totalFloor, kvarFloor, numberKvar) => {
//   kvarEnt = kvarFloor * totalFloor;
//   numberPadik = Math.ceil(numberKvar / kvarEnt);
//   floorNumber = Math.ceil((numberKvar % kvarEnt) / kvarFloor);
//   return { entrance: numberPadik, floor: floorNumber };
// };

//*Credentials
// const person = () => {
//    surname = prompt("Введите фамилию");
//    name = prompt("Введите имя");
//    fathername = prompt("Введите отчество");
//    formatName = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   };
//   const fullName = (surname, name, fathername) => {
//     return (
//       formatName(surname) +
//       " " +
//       formatName(name) +
//       " " +
//       formatName(fathername)
//     );
//   };
//   return {
//     name: formatName(name),
//     surname: formatName(surname),
//     fatherName: formatName(fathername),
//     fullName: fullName(surname, name, fathername),
//   };
// };

//*New line
// const multString = () => {
//   let string = prompt("Введите строку:");
//   let result = string.replace(/\\n/g, "\n");
//   return console.log(result);
// };

//*Prompt OR
// const getAge = () => 2023 - (Number(prompt("Сколько вам лет?")) || 18);

//*Login And Password
// const logIn = () => {
//   const login = prompt("Введите логин");
//   const password = prompt("Введите пароль");
//   if (login === "admin" && password === "qwerty") {
//     alert("Добро пожаловать!");
//   } else {
//     alert("Неверно");
//   }
// };

//*For Table
// const table = Array.from({ length: 5 }, (_, i) =>
//   Array.from({ length: 5 }, (_, j) => (i + 1) * (j + 1))
// );
// const tableWind = () => {
//   document.write(
//     "<table style='border-collapse: collapse; table-layout: fixed; text-align: center'>"
//   );
//   for (const row of table) {
//     document.write("<tr>");
//     for (const num of row) {
//       document.write(
//         `<td style='border: 1px solid black; width: 50px; text-align: center'>${num}</td>`
//       );
//     }
//     document.write("</tr>");
//   }
//   document.write("</table>");
// };

//*Filter Lexics

// const filtLex = () => {
//   inputWords = prompt("Введите текст").toLocaleLowerCase().split(" ");
//   badWords = ["бляха", "черт", "зараза", "балабол"];
//   filterWords = inputWords.filter(
//     (inputWords) => !badWords.includes(inputWords)
//   );
//   outString = filterWords.join(" ");
//   return outString;
// };

//*Currency Table
// const fetchCurrencyData = () => {
//   fetch("https://open.er-api.com/v6/latest/USD")
//     .then((res) => res.json())
//     .then((data) => {
//       let rates = data.rates;
//       let currencies = Object.keys(rates).slice(0, 5); // Ограничиваем количество валют до 5

//       // Добавляем названия валют в начало каждого ряда
//       const table = currencies.map((c1) => [
//         c1,
//         ...currencies.map((c2) => rates[c2] / rates[c1]),
//       ]);

//       // Добавляем названия валют в начало таблицы
//       table.unshift(["", ...currencies]);

//       tableWind(table);
//     })
//     .catch((err) => {
//       console.error(err);
//       alert("Произошла ошибка при обработке запроса.");
//     });
// };

// const tableWind = (table) => {
//   document.write(
//     "<table style='border-collapse: collapse; table-layout: fixed; text-align: center'>"
//   );
//   for (const row of table) {
//     document.write("<tr>");
//     for (const cell of row) {
//       document.write(
//         `<td style='border: 1px solid black; width: 50px; text-align: center'>${
//           typeof cell === "number" ? cell.toFixed(2) : cell
//         }</td>`
//       );
//     }
//     document.write("</tr>");
//   }
//   document.write("</table>");
// };

//*Form
// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
//   married: true,
// };

// const personForm = createForm(person);
// document.body.appendChild(personForm);

// createForm = (obj) => {
//   let form = document.createElement("form");
//   for (let key in obj) {
//     let label = document.createElement("label");
//     label.textContent = key;
//     form.appendChild(label);
//     let input = document.createElement("input");
//     input.type = typeof obj[key] === "boolean" ? "checkbox" : "text";
//     input.value = obj[key];
//     form.appendChild(input);
//     form.appendChild(document.createElement("br"));
//   }
//   return form;
// }

//*Array of objects sort
// let persons = [
//   { name: "Іван", age: 17 },
//   { name: "Марія", age: 35 },
//   { name: "Олексій", age: 73 },
//   { name: "Яків", age: 12 },
// ];

// dynamicSort = (property, sortOrder) => {
//   return function (a, b) {
//     if (sortOrder) {
//       return a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
//     } else {
//       return b[property] < a[property] ? -1 : b[property] > a[property] ? 1 : 0;
//     }
//   };
// };
// persons.sort(dynamicSort("age"));
// persons.sort(dynamicSort("age", false));
