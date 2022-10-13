const calculatorInput = [];


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
    return a / b;
}


function operate(operator, a, b) {
    switch (operator) {
        case '+':
            console.log(add(a, b));
            break;
        case '-':
            console.log(subtract(a, b));
            break;
        case '*':
            console.log(multiply(a, b));
            break;
        case '/':
            console.log(divide(a, b));
            break;
    }
}

const displayText = document.querySelector(".calculator-display-text");

function clearDisplay(display) {
    display.textContent = "";
    return ;
}

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => clearDisplay(displayText));


function eraseNumber(display) {
    display.textContent = display.textContent.slice(0,-1);
    return ;
}

const backspaceButton = document.querySelector(".backspace-button");
backspaceButton.addEventListener("click", () => eraseNumber(displayText));


const inputButtons = document.querySelectorAll(".math-buttons");
inputButtons.forEach(button => button.addEventListener("click", () => displayText.textContent += button.value))

function getInput(value) {
    calculatorInput.push(value);
    displayText.textContent = calculatorInput.join("");
}