
const display = document.getElementById("display");
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function calculateSquare() {
    try {
        const number = eval(display.value);
        display.value = number * number;
    } catch (error) {
        display.value = "Error";
    }
}
function calculateSquareRoot() {
    try {
        const number = eval(display.value);
        display.value = Math.sqrt(number);
    } catch (error) {
        display.value = "Error";
    }
}
function calculateFactorial() {
    try {
        const number = eval(display.value);
        if (number < 0) {
            display.value = "Error";
        } else {
            let result = 1;
            for (let i = 2; i <= number; i++) {
                result *= i;
            }
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
