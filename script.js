function clearScreen() {
    document.getElementById('display').value = '';
}
function addToScreen(value) {
    document.getElementById('display').value += value;
}
function calculateResault(){
let expression = document.getElementById('display').value;
let result = eval(expression);
document.getElementById('display').value = result;
}
function toggleSign(){
    let currentNumber = document.getElementById('display').value;
    document.getElementById('display').value = eval(currentNumber)  * -1;
}
function percentage(){
    let currentNumber = document.getElementById('display').value;
    document.getElementById('display').value = eval(currentNumber) / 100;
}
function backspace() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}