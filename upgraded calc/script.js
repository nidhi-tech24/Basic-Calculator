
// Basic operations
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
    return b === 0 ? "Cannot divide by 0!" : a / b;
}

function modulus(a, b) {
    return b === 0 ? "Cannot divide by 0!" : a % b;
}

function percentage(a, b) {
    return (a / 100) * b;
}

// Advanced operations
function squareRoot(a) {
    return a < 0 ? "Negative number not allowed!" : Math.sqrt(a);
}

function cubeRoot(a) {
    return Math.cbrt(a);
}

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function power(a, b) {
    return Math.pow(a, b);
}

// Factorial
function factorial(a) {
    if (a < 0 || !Number.isInteger(a)) {
        return "Enter a whole number!";
    }

    if (a > 170) {
        return "Number too large!";
    }

    let result = 1;

    for (let i = 1; i <= a; i++) {
        result = result * i;
    }

    return result;
}

// Display result
function showResult(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;

    if ([squareRoot, cubeRoot, square, cube, factorial].includes(operation)) {
        if (isNaN(num1)) {
            return showError();
        }

        result = operation(num1);
    }
    else {
        if (isNaN(num1) || isNaN(num2)) {
            return showError();
        }

        result = operation(num1, num2);
    }

    document.getElementById("result").innerText = "Result: " + result;
}

// Clear function
function clearResult() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result: 0";
}

// Error function
function showError() {
    document.getElementById("result").innerText =
        "Please enter valid numbers!";
}

// Connect buttons with functions
document.querySelectorAll("[data-operation]").forEach(function(button) {

    const operation = button.getAttribute("data-operation");

    button.onclick = function() {
        showResult(window[operation]);
    };

});

// Clear button
document.getElementById("clearBtn").onclick = clearResult;
