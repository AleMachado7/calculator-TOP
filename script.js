// BASIC MATH FUNCTIONS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b > 0 ? a / b : "Can't divide by zero";
}


function operate(a, operator, b) {    
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}


const displayText = document.querySelector(".calculator-display-text");
let input = '';

// Math input buttons
const numberButtons = document.querySelectorAll(".math-button");
numberButtons.forEach(button => button.addEventListener("click", () => {
    input += button.value;
    displayText.textContent = input;
}));

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => button.addEventListener("click", () => {
    const operators = ['+', '-', '*', '/'];
    if(operators.some(element => input.includes(element))) {
        evaluateInput(input);
    }
    input += button.value;
    displayText.textContent = input;
}));

//evaluate button
function evaluateInput(inputString) {
    const args = inputString.split(' ');
    if(args.length < 2) {
        return ;
    }
    let [num1, operator, num2] = args;
    input = operate(Number(num1), operator, Number(num2));
    if(typeof(input) === 'string') {
        let error = input;
        displayText.textContent = error;
        input = '';
    } else {
        input = String((Math.round(input * 100 ) / 100));
        displayText.textContent = input;
    }
}

const evaluateButton = document.querySelector(".evaluate-button");
evaluateButton.addEventListener("click", () => evaluateInput(input));


// Backspace Button
function eraseNumber() {
    input = input.slice(0, -1);
    displayText.textContent = input;
}

const backspaceButton = document.querySelector(".backspace-button");
backspaceButton.addEventListener("click", () => eraseNumber(displayText));

//Clear Button
function clearDisplay() {
    input = '';
    displayText.textContent = 0;
}

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearDisplay);


//keyboard support
window.addEventListener("keydown", function(e) {
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    button ? button.click() : null;
})

//decimal point
decimalButton = document.querySelector(".dot-button");
decimalButton.addEventListener("click", () => {
    if(input.includes('.')) {
        return ;
    }
    input += decimalButton.value;
    displayText.textContent = input;
})