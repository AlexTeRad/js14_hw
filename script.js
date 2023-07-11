//*Number: odd
// let userInput = prompt('Введите число');
// let number = Number(userInput);
// if (isNaN(userInput)) {
//     alert('Некоректный ввод')
// } else {
//     if (number % 2 === 0) {
//         alert('Введено четное число')
//     } else {
//         alert('Введенно нечетное число')
//     }
// }

//*String: lexics
// let userInput = prompt('Введите текст но не мат', 'Привет всем!');
// let rightText = userInput.includes('мат');
// console.log(rightText);

//*Boolean/Boolean: if
// let questionOne = confirm('Ты поел?');
// let questionTwo = confirm('Ты поспал?');
// if (questionOne === true && questionTwo === false) {
//     alert('Иди поспи')
// } else {
//     if (questionOne === false && questionTwo === true) {
//         alert('Иди поешь')
//     } else {
//         if (questionOne === false && questionTwo === false) {
//             alert('Плохо')
//         } else {
//             alert('Молодец')
//         }
//     }
// }

//*Comparison: sizes
// let euroSize = prompt('Введите размер одежды по Европейской маркировки:');
// euroSize = Number(euroSize);
// if (isNaN(euroSize)) {
//     alert('Не коректный ввод')
// } else if (euroSize >= 34 && euroSize < 38) {
//     worldSize = "XSS";
// } else if (euroSize >= 38 && euroSize < 40) {
//     worldSize = "XS";
// } else if (euroSize >= 40 && euroSize < 42) {
//     worldSize = "S";
// } else if (euroSize >= 42 && euroSize < 44) {
//     worldSize = "M";
// } else if (euroSize >= 44 && euroSize < 46) {
//     worldSize = "L";
// } else if (euroSize >= 46 && euroSize < 48) {
//     worldSize = "XL";
// } else if (euroSize >= 48 && euroSize < 50) {
//     worldSize = "XXL";
// } else if (euroSize >= 50) {
//     worldSize = "XXXL";
// } else {
//     alert('Размер не найден');
// } if (worldSize) {
//     alert('Размер в американской системе: ' + worldSize);
// }

//*Ternary
// let sex = confirm('Вы мужчина?') ? 'Вы мужчина' : 'Вы женщина'
// alert(sex);

//*Prompt: or
// let age = prompt("Сколько вам лет?");
// let year = 2023 - (age || 0);
// if (!age) {
//   alert("Вы не ввели возраст!");
// } else {
//   alert(year);
// }

//*Confirm: or this days
// let enter = confirm("пойдем на шопинг?") ? "тогда пошли" : "бяка";
// alert(enter);

//*Confirm: if this days
// let enter = confirm("Пойдем на шопинг?");
// if (enter === true) {
//   alert("Go togda");
// } else {
//   alert("Fe");
// }

//*Default: or
// let surName = prompt("Введите фамилию") || "Иван";
// let firstName = prompt("Введите имя") || "Иванович";
// let fatherName = prompt("Введите отчество") || "Иванов";
// alert(surName + " " + firstName + " " + fatherName);

//*Default: if
// let surName = prompt("Введите фамилию");
// let firstName = prompt("Введите имя");
// let fatherName = prompt("Введите отчество");
// if (!surName) {
//   surName = "Иван";
// }
// if (!firstName) {
//   firstName = "Иванович";
// }
// if (!fatherName) {
//   fatherName = "Иванов";
// }
// alert(surName + " " + firstName + " " + fatherName);

//*Currency exchange
// let vale = prompt(
//   "Какая валюта вас интересует?(USD, EUR, GBR):"
// ).toLocaleUpperCase();
// let choice = confirm("Вы хотите продать?");
// let rate;
// if (vale === "USD") {
//   rate = choice ? 37.15 : 37.25;
// } else if (vale === "EUR") {
//   rate = choice ? 40.8 : 40.99;
// } else if (vale === "GBR") {
//   rate = choice ? 46.8 : 47.7;
// } else {
//   alert("Извините, данная валюта не поддерживается");
// }

// if (rate) {
//   let summVale = prompt("Введите сумму на обмен");
//   let result = choice ? summVale * rate : summVale / rate;
//   alert(`Результат обмена ${result.toFixed(2)}`);
// }

//*Scissors // еще не сделанно
let vale = Number(
  prompt("Что вы хотите выбросить?(Камень это 1, ножницы это 2, бумаг это 3)")
);
let computerChoice = Math.ceil(Math.random() * 3);
