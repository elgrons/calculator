
// business logic
function add(number1, number2) {
    return number1 + number2;
}

function subtract (number3, number4) {
  return number3 - number4;
}

function multiply(number5, number6) {
  return number5 * number6(prompt("your sum is:"));
}
  
function divide(number7, number8) {
  return number7 / number8;
}
  // user interface logic 
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));

  window.alert(add(number1, number2));


  
  window.alert("Your sum is:" + subtract(number3, number4) + ".");


  window.alert(multiply(number5, number6));



  window.alert(divide(number7, number8));
