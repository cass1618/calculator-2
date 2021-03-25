// BUSINESS LOGIC
function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
    const beverage = $("#beverage").val();
    $("#selectorOP").text(beverage);
    const flavor = $("input:radio[name=flavor]:checked").val();
    $("#radioOP").text(flavor);
  });  
});