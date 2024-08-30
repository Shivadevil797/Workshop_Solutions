const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            clear();
        } else if (value === '&lt;') {
            backspace();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else if (value === '=') {
            calculate();
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function clear() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.value = '';
}

function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

function calculate() {
    const result = eval(`${previousNumber} ${operator} ${currentNumber}`);
    display.value = result;
    currentNumber = result;
    previousNumber = '';
    operator = '';
}