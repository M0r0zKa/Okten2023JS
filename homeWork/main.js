// Масиви та об'єкти:

// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [1,'Мороз', 123, "Владислав", true, false, 2132, "Олегович", 12, 543]
//
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])
// console.log(arr[8])
// console.log(arr[9])
// arr.map(a => console.log(a))

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let b1 = {
//     title: "Мастер и маргарита",
//     pageCount: "263стр.",
//     genre: "Роман"
// }
// let b2 = {
//     title: "Фактор Черчилля. Як одна людина змінила історію",
//     pageCount: "400стр.",
//     genre: "Історія, Біографія, Політика"
// }
// let b3 = {
//     title: "Как жить, если у тебя огромный пенис. Маленькая книга, которая поможет решить большие проблемы",
//     pageCount: "120стр.",
//     genre: "Нет данных"
// }

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let b1 = {
//     title: "Мастер и маргарита",
//     pageCount: "263стр.",
//     genre: "Роман",
//     authors: [{
//         name: 'Булгаков',
//         age: 49
//     }
//     ]
// }
//
// let b2 = {
//     title: "Фактор Черчилля. Як одна людина змінила історію",
//     pageCount: "400стр.",
//     genre: "Історія, Біографія, Політика",
//     authors: [{
//         name: "Боріс Джонсон",
//         age: 58
//     }
//     ]
// }
// let b3 = {
//     title: "Как жить, если у тебя огромный пенис. Маленькая книга, которая поможет решить большие проблемы",
//     pageCount: "120стр.",
//     genre: "Нет данных",
//     authors: [{
//         name: 'Джейкоб Ричард',
//         age: 35
//     }
//     ]
// }

// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {
//         name:'user1',
//         username:'u1',
//         password:'213qew'
//     },
//     {
//         name:'user2',
//         username:'u2',
//         password:'23213qew'
//     },
//     {
//         name:'user3',
//         username:'u3',
//         password:'21ewqe3qew'
//     }
//     ,    {
//         name:'user4',
//         username:'u4',
//         password:'21ewq233qew'
//     },
//     {
//         name:'user5',
//         username:'u5',
//         password:'21qeqweqw3qew'
//     },
//     {
//         name:'user6',
//         username:'u6',
//         password:'21grvdsa1323qew'
//     },
//     {
//         name:'user7',
//         username:'u7',
//         password:'21rewrewrwe3qew'
//     },
//     {
//         name:'user8',
//         username:'u8',
//         password:'21sdf23343qew'
//     },
//     {
//         name:'user9',
//         username:'u9',
//         password:'2sdfqew'
//     },
//     {
//         name:'user810',
//         username:'u10',
//         password:'df23343qew'
//     },
// ]
// // users.map(user => console.log(user.password))
// // console.log(users[0].password)


// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// let x = prompt("переменная Х")

// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// if (x!=0){
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// let time = prompt("Напиши время от 0 до 59")
// if(time <= 59 && time !== 0){
//     if(time >0 && time <= 15){
//         console.log('Первая четверть')
//     }else if(time >15 && time <= 30){
//         console.log('Вторая четверть')
//     }else if(time >30 && time <= 45){
//         console.log('Третья четверть')
//     }else if(time >45 && time < 60){
//         console.log('Четвёртая четверть')
//     }
// }else {
//     let time = prompt("Напиши время от 0 до 59")
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('day')

if (day > 0 && day <= 10) {
    console.log('Первая')
}else if(day > 10 && day <= 20){
    console.log('Вторая')
}else if(day > 20 && day <= 31){
    console.log('Третья')
}else {
    console.log('ошибка')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
// let x = prompt("число 1")
// let y = prompt("число 2")
//
// if(x>y){
//     console.log(x)
// }else if(x===y){
//     console.log('Числа равные')
// }else {
//     console.log(y)
// }

// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = prompt('Значение') || "default"
// console.log(x);

// // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('Супер')
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('Супер')
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('Супер')
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('Супер')
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('Супер')
// }
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('Супер')
// }
// coursesAndDurationArray.map((obj) => {
//     obj.monthDuration > 5 ? console.log('Супер') : null
// } )
