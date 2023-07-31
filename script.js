// *Literals
// const car = {
//   brand: 'Porsh',
//   model: 911,
//   year: 2018,
//   generations: 8,
//   mark: 8,
//   engine: 'MDC.JA',
// };

// *Literals expand
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

// *Literals copy
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

// *Html tree
// const body = {
//   tagName: "body",
//   attrs: {},
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//           children: [],
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//           },
//           children: [],
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//           },
//           children: [],
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "button",
//           attrs: { id: "ok" },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: { id: "cancel" },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };
// let textSecondButton = body.children[1].children[1].children[0].text;
// let idSecondInput = body.children[0].children[3].attrs.id;

// *Parent
// const body = {
//   tagName: "body",
//   attrs: {},
//   children: [
//     {
//       tagName: "div",
//       attrs: { parent: "body" },
//       children: [
//         {
//           tagName: "span",
//           attrs: { parent: "div" },
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//           attrs: { parent: "div" },
//           children: [],
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "name",
//             parent: "div",
//           },
//           children: [],
//         },
//         {
//           tagName: "input",
//           attrs: {
//             type: "text",
//             id: "surname",
//             parent: "div",
//           },
//           children: [],
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       attrs: { parent: "body" },
//       children: [
//         {
//           tagName: "button",
//           attrs: {
//             id: "ok",
//             parent: "div",
//           },
//           children: ["OK"],
//         },
//         {
//           tagName: "button",
//           attrs: {
//             id: "cancel",
//             parent: "div",
//           },
//           children: ["Cancel"],
//         },
//       ],
//     },
//   ],
// };

// *Change OK
// const okButton = document.getElementById("ok");
// const newId = prompt("Введите новый id для кнопки:");
// okButton.setAttribute("id", newId);

// *Destructure
// const {
//   children: [
//     {
//       children: [
//         {
//           children: [ spanText ],
//         },
//         {},
//         {
//           attrs: { id: secondInputId },
//         },
//       ],
//     },
//     {
//       children: [
//         {},
//         {
//           children: [ secondButtonText ],
//         },
//       ],
//     },
//   ],
// } = body;
// console.log(spanText); // Выводит текст в теге span
// console.log(secondInputId); // Выводит id второго input
// console.log(secondButtonText); // Выводит текст второй кнопки

// *Destruct array
// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// let numderChet = arr.filter(
//   (item) => typeof item === "number" && item % 2 === 0
// );
// let numberNeChet = arr.filter(
//   (item) => typeof item === "number" && item % 2 === 0
// );
// let letters = arr.filter((item) => typeof item === "string");
// ?

// *Destruct string
// let arr = [1, "abc"];
// let [number, str] = arr;
// let [s1, s2, s3] = str;

// console.log(number);
// console.log(s1);
// console.log(s2);
// console.log(s3);

// *Destruct 2
// let obj = {
//   name: "Ivan",
//   surname: "Petrov",
//   children: [{ name: "Maria" }, { name: "Nikolay" }],
// };
// const {
//   children: [name1, name2],
// } = obj;

// *Destruct 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// const [a, b] = arr;
// const { length } = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(length); // 8

// *Copy delete
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

// *Currency real rate
// let baseCurrency = prompt("Введите входящую валюту").toUpperCase();
// let targetCurrency = prompt("Введите валюту для конвертации").toUpperCase();
// let amount = prompt("Введите сумму в входной валюте");

// fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`).then(res => res.json())
//       .then(data => {
//             if (data.base_code === baseCurrency && data.rates.hasOwnProperty(targetCurrency)) {
//                 let rate = data.rates[targetCurrency];
//                 let result = amount * rate;
//                 alert(`Сумма в ${targetCurrency}: ${result}`);
//             } else {
//                 alert("Произошла ошибка, проверьте введенные валюты.");
//             }
//       })
//       .catch(err => {
//             console.error(err);
//             alert("Произошла ошибка при обработке запроса.");
//       });
// ?

// *Currency drop down
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//       .then(data => {
//             let select = document.createElement('select');
//             for (let currency in data.rates) {
//                 let option = document.createElement('option');
//                 option.text = currency;
//                 option.value = currency;
//                 select.appendChild(option);
//             }
//             document.body.appendChild(select);
//       })
//       .catch(err => {
//             console.error(err);
//             alert("Произошла ошибка при обработке запроса.");
//       });

// *Currency table
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//     .then(data => {
//         let rates = data.rates;
//         let currencies = Object.keys(rates).slice(0, 10); // Ограничиваем количество валют до 10

//         // Начинаем создавать таблицу
//         let tableHTML = '<table border="1" style="border-collapse:collapse; text-align:center;">';

//         // Заголовок таблицы
//         tableHTML += '<tr><th></th>';
//         for (let c1 of currencies) {
//             tableHTML += `<th>${c1}</th>`;
//         }
//         tableHTML += '</tr>';

//         // Строки таблицы
//         for (let c1 of currencies) {
//             tableHTML += `<tr><th>${c1}</th>`;
//             for (let c2 of currencies) {
//                 let crossRate = rates[c2] / rates[c1]; // Расчет кросс-курса
//                 tableHTML += `<td>${crossRate.toFixed(2)}</td>`; // Округляем до 2 знаков после запятой
//             }
//             tableHTML += '</tr>';
//         }

//         tableHTML += '</table>';

//         // Добавляем таблицу в HTML документ
//         document.body.innerHTML += tableHTML;
//     })
//     .catch(err => {
//         console.error(err);
//         alert("Произошла ошибка при обработке запроса.");
//     });

//*Form
// const car = {
//   brand: 'Porsh',
//   model: 911,
//   year: 2018,
//   generations: 8,
//   mark: 8,
//   engine: 'MDC.JA',
//   horsepower: 300,
//   origin: "Germany",
//   in_production: false
// };
// let form = document.createElement('form');
// for (let key in car) {
//     let label = document.createElement('label');
//     label.textContent = key;
//     form.appendChild(label);
//     let input = document.createElement('input');
//     input.type = typeof car[key] === 'boolean' ? 'checkbox' : 'text';
//     input.value = car[key];
//     form.appendChild(input);
//     form.appendChild(document.createElement('br'));
// }
// document.body.appendChild(form);

//*Table
//?
// const persons = [
//   {
//     name: "Марія",
//     fatherName: "Іванівна",
//     surname: "Іванова",
//     sex: "female",
//   },
//   {
//     name: "Миколай",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     age: 15,
//   },
//   {
//     name: "Петро",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     married: true,
//   },
// ];

// let uniqueKeys = new Set();

// // Находим все уникальные ключи
// persons.forEach((obj) => {
//   for (let key in obj) {
//     uniqueKeys.add(key);
//   }
// });

// let tableHTML = '<table border="1">';

// // Создаем строку заголовков
// tableHTML += "<tr>";
// uniqueKeys.forEach((key) => {
//   tableHTML += `<th>${key}</th>`;
// });
// tableHTML += "</tr>";

// // Создаем строки данных
// persons.forEach((obj) => {
//   tableHTML += "<tr>";
//   uniqueKeys.forEach((key) => {
//     tableHTML += `<td>${obj[key] || ""}</td>`; // Проверяем, есть ли ключ в объекте и выводим значение
//   });
//   tableHTML += "</tr>";
// });

// tableHTML += "</table>";

// // Добавляем таблицу в HTML документ
// document.body.innerHTML = tableHTML;
