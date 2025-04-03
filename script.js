// Function to append values to the input field
function appendValue(value) {
    document.getElementById("result").value += value;
}

// Function to calculate the result
function calculate() {
    try {
        let display = document.getElementById("result");
        display.value = eval(display.value); // Evaluates the expression
    } catch (error) {
        display.value = "Error"; // Handles invalid expressions
    }
}

// Function to clear the input field
function clearResult() {
    document.getElementById("result").value = "";
}
