// business logic
function add(number1, number2) {
    return number1 + number2;
  }
  
  // user interface logic 
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  
  window.alert(add(number1, number2));

function subtract (number3, number4) {
    return number3 - number4;
  }

  const number3= parseInt(prompt("Enter a third number:"));
  const number4= parseInt(prompt("Enter a fourth number:"));

  window.alert(subtract(number3, number4));

  function multiply(number5, number6) {
    return number5 * number6;
  }

  const number5= parseInt(prompt("Enter a fifth number:"));
  const number6= parseInt(prompt("Enter a sixth number:"));

  window.alert(multiply(number5, number6));
  