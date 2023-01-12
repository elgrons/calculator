// business logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract (number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}
  
function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic 

function handleCalculation(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input1#input1").value);
  const number2 = parseInt(document.querySelector("input2#input2").value);
  const operator = document.querySelector("input[name='operator']:checked").value;
} //the code to get and process form values will go here!

window.addEventListener ("load", function() {
  const form = document.getElementById("calculator");
  form.addEventListener("submit", handleCalculation);
}); //the code that makes the form work based on multiple functions!

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));

//window.alert(add(number1, number2));

//window.alert("Your sum is:" + subtract(number1, number2) + ".");

//window.alert(multiply(number1, number2));

//window.alert(divide(number1, number2));
