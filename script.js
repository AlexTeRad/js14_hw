// Итак господа , я придумал домашку.
// Задача 1
// Представьте себе, что у вас 2 ведра разных размеров - 5л и 3л.
// Вам нужно отмерить 4л. Эту задачу нужно сделать с помощью нескольких функций или обьектов с помощью замыкания нового значения воды в ведре.
//  Задача 2
// Представьте себе, что у вас 2 команды по пляжному волейболу по 3 человека в каждой, но на поле каждой из команд - 4 зоны. Соответственно когда-то мяч попадет на зону, которая команда не закрыла и очко засчитается команде противника.
// Сделать нужно через цикл, команды закрывают 3 из 4 зон - и после каждого перехода они меняются (рендомно) - тут нужна функция-рендомайзер и должен быть счетчик перехода меча от команды к комманде пока мяч не попадет в неприкрытую зону и счетчик матча, к примеру , кто выгрывает 3 раунда - выигрывает игру

//*Задача №1
// Функция для создания ведра с заданной емкостью
const createBucket = (size) => {
  // Локальная переменная, которая хранит текущий объем воды в ведре.
  // Начальное значение установлено в 0.
  let currentAmount = 0;
  // Возвращаем объект, представляющий ведро
  return {
    // Метод для наполнения ведра до его максимальной емкости
    fill: () => {
      currentAmount = size;
    },
    // Метод для опустошения ведра
    empty: () => {
      currentAmount = 0;
    },
    // Метод для переливания воды из текущего ведра в другое
    pourInto: (otherBucket) => {
      // Рассчитываем, сколько свободного места осталось в другом ведре
      const spaceInOtherBucket =
        otherBucket.getCapacity() - otherBucket.getCurrentAmount();
      // Определяем, сколько воды мы можем перелить (меньшее из двух значений: текущего объема или свободного места в другом ведре)
      const amountToPour = Math.min(currentAmount, spaceInOtherBucket);
      // Добавляем воду в другое ведро
      otherBucket.add(amountToPour);
      // Уменьшаем объем воды в текущем ведре
      currentAmount -= amountToPour;
    },
    // Метод для получения текущего объема воды в ведре
    getCurrentAmount: () => currentAmount,
    // Метод для получения максимальной емкости ведра
    getCapacity: () => size,
    // Метод для добавления указанного объема воды в ведро
    add: (amount) => {
      currentAmount += amount;
      // Если объем воды превышает емкость ведра, установите его равным емкости ведра
      if (currentAmount > size) {
        currentAmount = size;
      }
    },
  };
};

const measureFourLiters = () => {
  const bucket5 = createBucket(5);
  const bucket3 = createBucket(3);

  // Шаги для отмеривания 4л:
  // 1. Наполняем 5л ведро
  // 2. Выливаем из 5л ведра в 3л ведро
  // 3. Опустошаем 3л ведро
  // 4. Выливаем оставшиеся 2л из 5л ведра в 3л ведро
  // 5. Наполняем 5л ведро
  // 6. Выливаем из 5л ведра в 3л ведро (в котором уже есть 2л)

  bucket5.fill();
  bucket5.pourInto(bucket3);
  bucket3.empty();
  bucket5.pourInto(bucket3);
  bucket5.fill();
  bucket5.pourInto(bucket3);

  return bucket5.getCurrentAmount();
};

console.log(measureFourLiters()); // Выведет: 4

//*Задача №2
// Функция для получения случайного числа от 1 до 4
const getRandomZone = () => Math.floor(Math.random() * 4) + 1;
// Функция для рандомного выбора 3 покрытых зон командой
const getCoveredZones = () => {
  const zones = [1, 2, 3, 4];
  const coveredZones = [];

  while (coveredZones.length < 3) {
    const index = Math.floor(Math.random() * zones.length);
    coveredZones.push(...zones.splice(index, 1)); // Извлекаем случайную зону и добавляем её в покрытые зоны
  }

  return coveredZones;
};
// Основная логика игры
const playGame = () => {
  let teamAScore = 0;
  let teamBScore = 0;

  while (teamAScore < 3 && teamBScore < 3) {
    // Команда A выбирает покрытые зоны
    let teamACoveredZones = getCoveredZones();
    // Мяч направляется в случайную зону
    let ballZone = getRandomZone();
    // Если мяч попал в непокрытую зону командой A
    if (!teamACoveredZones.includes(ballZone)) {
      teamBScore++;
      console.log(
        `Round ${
          teamAScore + teamBScore
        }: Team B scores! Current score: Team A - ${teamAScore}, Team B - ${teamBScore}`
      );
      continue; // Переходим к следующему раунду
    }
    // Команда B выбирает покрытые зоны
    let teamBCoveredZones = getCoveredZones();
    // Мяч направляется в случайную зону
    ballZone = getRandomZone();
    // Если мяч попал в непокрытую зону командой B
    if (!teamBCoveredZones.includes(ballZone)) {
      teamAScore++;
      console.log(
        `Round ${
          teamAScore + teamBScore
        }: Team A scores! Current score: Team A - ${teamAScore}, Team B - ${teamBScore}`
      );
    }
  }
  // Выводим победившую команду
  if (teamAScore === 3) {
    console.log("Team A wins the game!");
  } else {
    console.log("Team B wins the game!");
  }
};
// Запускаем игру
playGame();
