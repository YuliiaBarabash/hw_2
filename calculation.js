const operators = prompt('What calculation do you want to do? (+ - * /)');
const firstNumber = Number(prompt('Enter first number'));
const secondNumber = Number(prompt('Enter second number'));
const add = '+';
const subtract = '-';
const multiply = '*';
const divide = '/';
const addResult = firstNumber + secondNumber;
const subResult = firstNumber - secondNumber;
const multiplyResult = firstNumber * secondNumber;
const divideResult = firstNumber / secondNumber;

if (calculation == add) {
alert(firstNumber + add + secondNumber + '=' + addResult);
} else if (operators == subtract) {
alert(firstNumber + subtract + secondNumber + '=' + subResult);
} else if (operators == multiply) {
alert(firstNumber + multiply + secondNumber + '=' + multiplyResult);
} else if (operators == divide) {
alert(firstNumber + divide + secondNumber + '=' + divideResult);
}