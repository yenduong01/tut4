let number1;
let number2;

while (true)
{
  number1 = Number(prompt("Enter first number: "));
  if (Number.isInteger(number1) && Number.parseInt(number1))
  {
    break;
  }
  else {
    console.log(`Sorry, ${number1} is not a valid entry.`);
  }
}

while (true)
{
  number2 = Number(prompt("Enter second number: "));
  if (Number.isInteger(number2) && Number.parseInt(number2))
  {
    break;
  }
  else
  {
    console.log(`Sorry, ${number2} is not a valid entry.`);
  }
}

const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;
const modulo = number1 % number2;

console.log(`${number1} + ${number2} = ${addition}`);
console.log(`${number1} - ${number2} = ${subtraction}`);
console.log(`${number1} * ${number2} = ${multiplication}`);
console.log(`${number1} / ${number2} = ${division}`);
console.log(`${number1} % ${number2} = ${modulo}`);