// Function to calculate the product and display it
function showProduct() {
    // Get the input elements
    var inputElement1 = document.getElementById('numberInput1');
    var inputElement2 = document.getElementById('numberInput2');

    // Get the values entered by the user
    var inputValue1 = parseFloat(inputElement1.value); // Convert to a number
    var inputValue2 = parseFloat(inputElement2.value); // Convert to a number

    // Check if both inputs are valid numbers
    if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
        // Calculate the product
        var product = inputValue1 * inputValue2;

        // Display the product in the HTML
        document.getElementById('result').textContent = 'Result: ' + product;
    } else {
        // If inputs are not valid numbers, show an error message
        document.getElementById('result').textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function showSum() {
    // Get the input elements
    var inputElement1 = document.getElementById('numberInput1');
    var inputElement2 = document.getElementById('numberInput2');

    // Get the values entered by the user
    var inputValue1 = parseFloat(inputElement1.value); // Convert to a number
    var inputValue2 = parseFloat(inputElement2.value); // Convert to a number

    // Check if both inputs are valid numbers
    if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
        // Calculate the product
        var sum = inputValue1 + inputValue2;

        // Display the product in the HTML
        document.getElementById('result').textContent = 'Sum: ' + sum;
    } else {
        // If inputs are not valid numbers, show an error message
        document.getElementById('result').textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function showDiff() {
    // Get the input elements
    var inputElement1 = document.getElementById('numberInput1');
    var inputElement2 = document.getElementById('numberInput2');

    // Get the values entered by the user
    var inputValue1 = parseFloat(inputElement1.value); // Convert to a number
    var inputValue2 = parseFloat(inputElement2.value); // Convert to a number

    // Check if both inputs are valid numbers
    if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
        // Calculate the product
        var diff = inputValue1 - inputValue2;

        // Display the product in the HTML
        document.getElementById('result').textContent = 'Difference: ' + diff;
    } else {
        // If inputs are not valid numbers, show an error message
        document.getElementById('result').textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function showDiv() {
    // Get the input elements
    var inputElement1 = document.getElementById('numberInput1');
    var inputElement2 = document.getElementById('numberInput2');

    // Get the values entered by the user
    var inputValue1 = parseFloat(inputElement1.value); // Convert to a number
    var inputValue2 = parseFloat(inputElement2.value); // Convert to a number

    // Check if both inputs are valid numbers
    if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
        // Calculate the product
        var div = inputValue1 / inputValue2;

        // Display the product in the HTML
        document.getElementById('result').textContent = 'Division: ' + div;
    } else {
        // If inputs are not valid numbers, show an error message
        document.getElementById('result').textContent = 'Invalid input. Please enter valid numbers.';
    }
}