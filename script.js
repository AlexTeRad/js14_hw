//*1 Квартира в ней комнаты - в каждой комнате ширина и длинна => вернуть площадь квартиры
//*2 PROMPT и ты вводишь слово => найти сколько гласных и согласных букв
//*3 Инпут в HTML => вводим имейл и проверяем его на валидность => проверяем на наличие @ .com / .ua / .ru
//*4 К примеру в вас есть кофе (1кг, 2кг) => задача сделать функцию,// запытаете зерна - ставите помол (грамм за порцию) и считаете кол-во чашек
//*5 У вас есть дистанция и длинна шага => покажите за сколько мы ее пройдем и ответ должен быть вы прошли за (0 часов 12 минут 10 секунд)
//*6 У вас телефон с памятью в ГБ - и при вызове функции вы передаете массив с данными(в МБ) по типу [0.2, 5.5, 2.3]
//* =>показать сколько осталось памяти

//*1
// getCalculateApartmentArea = () => {
//     let totalArea = 0;
//     let numRooms = prompt("Введите количество комнат: ");
//     for (let i = 0; i < numRooms; i++) {
//         let length = prompt(`Введите длину комнаты ${i+1}: `);
//         let width = prompt(`Введите ширину комнаты ${i+1}: `);
//         totalArea += length * width;
//     }
//     alert(`Общая площадь квартиры составляет ${totalArea} квадратных метров.`);
//   }

//   getCalculateApartmentArea();

//*2
// getWordParsing = () => {
//   let word = prompt("Введите слово").toLocaleLowerCase();
//   let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
//   let consonants = [
//     "б",
//     "в",
//     "г",
//     "д",
//     "ж",
//     "з",
//     "й",
//     "к",
//     "л",
//     "м",
//     "н",
//     "п",
//     "р",
//     "с",
//     "т",
//     "ф",
//     "х",
//     "ц",
//     "ч",
//     "ш",
//     "щ",
//   ];
//   let vowelsInWord = 0;
//   let consonantsInWord = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//       vowelsInWord++;
//     } else if (consonants.includes(word[i])) {
//       consonantsInWord++;
//     }
//   }

//   console.log(`Гласные буквы: ${vowelsInWord}`);
//   console.log(`Согласные буквы: ${consonantsInWord}`);
// };

// getWordParsing();

//*3
// checkEmail = () => {
//   const email = document.getElementById("emailInput").value;
//   const messageElement = document.getElementById("message");

//   // Регулярное выражение для проверки email на наличие @ и домена .com, .ua или .ru
//   const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|ua|ru)$/;

//   if (regex.test(email)) {
//     messageElement.textContent = "Email валидный!";
//     messageElement.style.color = "green";
//   } else {
//     messageElement.textContent = "Email не валидный!";
//     messageElement.style.color = "red";
//   }
// };

//*4
// makeCoffee = () => {
//   // Получаем количество кофейных зерен в кг от пользователя
//   let coffeeBeans = Number(prompt("Введите количество кофейных зерен в кг"));

//   // Создаем объект с данными о помоле кофе для каждого вида кофе
//   let coffeeGrind = {
//     Эспрессо: 70,
//     Лате: 80,
//     Американо: 70,
//     Капучино: 80,
//     Флейтвайт: 80,
//   };

//   // Создаем объект с данными о типе помола для каждого вида кофе
//   let coffeeGrindType = {
//     Эспрессо: "мелкий",
//     Лате: "средний",
//     Американо: "мелкий",
//     Капучино: "средний",
//     Флейтвайт: "средний",
//   };

//   // Получаем выбор пользователя
//   let coffeeChoice = prompt(
//     "Какой кофе вы хотите? (Эспрессо, Лате, Американо, Капучино, Флейтвайт)"
//   );
//   let cups = Number(prompt("Сколько чашек?"));

//   // Проверяем, есть ли выбранный вид кофе в нашем объекте
//   if (coffeeGrind[coffeeChoice]) {
//     // Выводим информацию о типе помола для выбранного вида кофе
//     console.log(
//       `Тип помола для ${coffeeChoice}: ${coffeeGrindType[coffeeChoice]}`
//     );
//     // Вычисляем количество кофе, необходимое для приготовления выбранного количества чашек
//     let coffeeNeeded = coffeeGrind[coffeeChoice] * cups;
//     console.log(
//       `Для приготовления ${cups} чашек ${coffeeChoice} необходимо ${coffeeNeeded} грамм кофе`
//     );
//     // Вычисляем оставшееся количество кофе
//     let coffeeLeft = coffeeBeans * 1000 - coffeeNeeded;
//     console.log(`Осталось ${coffeeLeft} грамм кофе`);
//   } else {
//     console.log("Извините, такого вида кофе нет в наличии");
//   }
// };

// makeCoffee();

//*5
// getWalkTime = (distance, stepLength, speed) => {
//     // Вычисляем время в секундах
//     let time = (distance / stepLength) / speed * 60 * 60;
//     // Вычисляем количество часов, минут и секунд
//     let hours = Math.floor(time / 3600);
//     let minutes = Math.floor((time % 3600) / 60);
//     let seconds = Math.floor(time % 60);
//     // Форматируем результат
//     let result = `Вы пройдете за ${hours.toString().padStart(2, '0')} часов ${minutes.toString().padStart(2, '0')} минут ${seconds.toString().padStart(2, '0')} секунд`;
//     return result;
// }

//   console.log(getWalkTime(1000, 0.5, 5)); // выведет "Вы пройдете за 00 часов 06 минут 40 секунд"

//*6
// getRemainingMemory = (totalMemoryGB, usedMemoryMB) => {
//     const usedMemoryTotal = usedMemoryMB.reduce((sum, value) => sum + value, 0); // Сумма всех элементов массива
//     const remainingMemoryMB = totalMemoryGB * 1024 - usedMemoryTotal;

//     return remainingMemoryMB < 1024
//       ? `${remainingMemoryMB.toFixed(2)} МБ`
//       : `${(remainingMemoryMB / 1024).toFixed(2)} ГБ`;
//   };

//   // Пример использования:
//   const totalMemory = 16; // 16 ГБ
//   const usedMemoryArray = [0.2, 5.5, 2.3]; // МБ

//   console.log(
//     `Осталось памяти: ${getRemainingMemory(totalMemory, usedMemoryArray)}`
//   );
