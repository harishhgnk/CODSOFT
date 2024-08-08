const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === '') return;
    display.value += operator;
}

function appendDot() {
    if (display.value.includes('.')) return;
    display.value += '.';
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch {
        display.value = 'Error';
    }
}
