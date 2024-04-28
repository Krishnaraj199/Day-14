// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); // Evaluate the expression
        display.value = result;
    } catch (error) {
        alert('Invalid expression! Please check your input.');
    }
}
