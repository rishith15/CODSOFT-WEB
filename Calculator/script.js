const display = document.getElementById('display');
let calculation = '';

function inputValue(value) {
    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculateResult();
    } else {
        calculation += value;
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = calculation;
}

function clearDisplay() {
    display.textContent = '0';
    calculation = '';
}

function calculateResult() {
    try {
        const result = eval(calculation);
        display.textContent = result;
        calculation = result.toString(); // Allow continuing calculations with the result
    } catch (error) {
        display.textContent = 'Error';
        clearDisplay();
    }
}