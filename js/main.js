console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10

// имя переменной: myStr, значение: 'строка'

// имя переменной: myBool, значение: true

// имя переменной: myArr, значения: 1, 2, 3, 4, 5

// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'


var myNum = 10, myStr = 'строка', myBool = true, myArr = [1, 2, 3, 4, 5] , 
    myObj = { first: 'First Name',
              last: 'Last Name' };

console.log('myNum =', myNum);
console.log('myStr =', myStr);
console.log('myBool =', myBool);
console.log('myArr =', myArr);
console.log('myObj =', myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

// decimal2


var decimal2;
decimal2 = myNum.toFixed(2);

console.log('decimal2 =', decimal2);

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

// i


var i = 5;

console.log('i =', i);
console.log('i++ =', i++);
console.log('i =', i);
console.log('++i =', ++i);
console.log('i =', i);

i = 5;

console.log('i =', i);
console.log('i-- =', i--);
console.log('i =', i);
console.log('--i =', --i);
console.log('i =', i);
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */


var myTest = 20;

console.log('myTest =', myTest);

myTest += 5;
console.log('(+= 5)', 'myTest =', myTest);
console.log('myTest =', myTest);

myTest -= 5;
console.log('(-= 5)', 'myTest =', myTest)
console.log('myTest =', myTest);

myTest *= 2;
console.log('(*= 2)', 'myTest =', myTest)
console.log('myTest =', myTest);

myTest /= 5;
console.log('(/= 5)', 'myTest =', myTest)
console.log('myTest =', myTest);

myTest %= 3;
console.log('(%= 3)', 'myTest =', myTest)
console.log('myTest =', myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi

// округленное значение числа 89.279 → myRound

// случайное число между 0..10 → myRandom

// 3 в 5 степени → myPow


var myPi = Math.PI, myRound = Math.round(89.279), myRandom = Math.random()*10, myPow = Math.pow(3,5);

console.log('myPi =', myPi);
console.log('myRound =', Math.round(myRound));
console.log('myRandom =', myRandom);
console.log('myPow =', myPow);

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj


var strObj = {str: 'Мама мыла раму, рама мыла маму'};

strObj.length = strObj.str.length;
console.log('strObj = ', strObj);


/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos

var isRamaPos = strObj.str.indexOf('рама');

console.log('isRamaPos:', isRamaPos);

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace


var strReplace = strObj.str.replace('мыла', 'моет');
console.log('strObj.str:', strObj.str);
console.log('strReplace:', strReplace);
strReplace = strReplace.replace('рама', 'Рама');
console.log('strReplace:', strReplace);
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */


console.log(myStr.toUpperCase());
console.log('Прыжок С ПеРеПоДвЫпОдВеРтОм'.toLowerCase());