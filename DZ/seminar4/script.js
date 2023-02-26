// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// let size = 10
// for (let index = 0; index < size; index++) {
// if (index === 0) {
// console.log(`${index} - это ноль`)
// } else if (index % 2 === 0){
// console.log(`${index} - чётное число`)
// } else {
// console.log(`${index} - нечётное число`)
// }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(3, 2) 
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const myArray = []
// for (let index = 0; index < 5; index++) {
// let value = Math.floor((Math.random() * 9));
// myArray[index] = value
// }
// console.log(myArray)

// let sum = 0 
// for (let index = 0; index < myArray.length; index++) {
// sum = sum + myArray[index]
// }
// console.log(`${sum} сумма `)

// let minValue = myArray[0]
// for (let index = 0; index < myArray.length; index++) {
// if (myArray[index] < minValue) {
// minValue = myArray[index]
// }
// }
// console.log(`${minValue} наименьшее`)

// for (let index = 0; index < myArray.length; index++) {
// if (myArray[index] === 3){
// console.log(`3 есть на позиции ${index + 1}`)
// }
// }
