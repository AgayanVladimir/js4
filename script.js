// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

const getSumNumbers = (num1, num2) => {
	let sum = 0;
	sum = num1 + num2;

	if (!num1 || !num2) {
		sum = `введите два параметра`

	} else if (typeof num1 != 'number' || typeof num2 != 'number') {
		sum = `введенные данные не являются числами`

	}
	return sum;
}
console.log(getSumNumbers(2, 'w'));

// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {

	let result = a ? console.log(a * a) : console.log(`Uncaught Error: Функция "square" не может быть вызвана без аргумента`);
	return result;

}
square();

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

let getRandomNumber = (number) => {
	let getRandomNumberResult = 0;
	let randomNum = Math.floor(Math.random() * (10 - 0)) + 0;
	if (number <= 10 && number >= 0 && number === randomNum) {
		getRandomNumberResult = `Вы выиграли`
	} else if (number <= 10 && number >= 0 && number !== randomNum) {
		getRandomNumberResult = `Вы не угадали, ваше число - ${number}, а выпало число - ${randomNum}`
	} else { getRandomNumberResult = `Неверное число` }
	return getRandomNumberResult;
}
console.log(getRandomNumber());

// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
let filterFor = (arr, a) => {
	let newArr = [];
	for (let element of arr) {
		if (element >= a) {
			newArr.push(element);
		}
	}
	return newArr;
}

console.log(filterFor(arr, 3.11));

// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
const copyArr = (arr) => {
	let result = 0;
	return result = arr.map((item) => item);

}
console.log(copyArr(arr));


// Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }
const objectWithNumbers = {
	a: 10,
	b: 20,
	c: 'string',
	d: 12,
}

const getSumObject = (obj) => {
	let sum = 0;
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			sum += obj[key];
		}
	}
	return sum;

}
console.log(getSumObject(objectWithNumbers));