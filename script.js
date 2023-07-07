//String: greeting
// let name = prompt('Какого твое имя?');
// alert('Привет ' + name + '!');

//String: gopni4ek
// let text = prompt('Введите предложение через запятые');
// let newtext = text.split(',').join(' блин');//Разбиваем строку на несколько мелких строк по ,
// alert(newtext);

//String: capitalize
// let str = "cANBerRa"
// let result = str.slice(0,1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
// console.log(result); //Canberra

//String: word count
// let word = "Lorem ipsum dolor sit amet."
// let result = word.split(' ').length;
// console.log(result);

//String: credentials
// let mainname = prompt('Введите фамилию');
// let name = prompt('Введите имя');
// let fathername = prompt('Введите отчество');

// mainname = mainname.trim().slice(0, 1).toLocaleUpperCase()+ mainname.slice(1).toLocaleLowerCase();
// name = name.trim().slice(0, 1).toLocaleUpperCase()+ name.slice(1).toLocaleLowerCase();
// fathername = fathername.trim().slice(0, 1).toLocaleUpperCase()+ fathername.slice(1).toLocaleLowerCase();//Делаем магию

// let fullname = mainname + ' ' + name + ' ' + fathername;
// console.log(fullname);

//String: beer
// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let result = str.split('пиво').join('чай')
// console.log(result); //"Було жарко. Василь пив чай уприкуску з креветками"

//String: no tag
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
// let tagSt = str.indexOf('<');
// let tagEnd = str.indexOf('>');
// let result = str.slice(0, tagSt)+str.slice(tagEnd + 1)
// console.log(result) //якийсь текст, в якому є один тег і всяке інше

//String: big tag
// let str = "якийсь текст у якому є один тег <br /> і всяке інше"
// let tagStart = str.indexOf("<");
// let tagEnd = str.indexOf(">");
// let tag = str.slice(tagStart, tagEnd + 1);
// let result = str.slice(0, tagStart) + tag.toLocaleUpperCase() + str.slice(tagEnd +1)
// console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше

//String: new line
// let string = prompt('Введите строку:');
// let multiLineString = string.split('\\n').join('\n');
// console.log(multiLineString);

//String: youtube
// const regex = new RegExp(
//     '/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/');
// const input = prompt("Введите текст со ссылкой на YouTube:");

// const match = input.match(regex);
// if (match) {
//   const videoId = match[1];
//   const embedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
//   document.write(embedHtml);
// } else {
//   document.write("Ссылка на YouTube видео не найдена.");
// }
