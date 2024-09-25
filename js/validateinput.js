let number = Number();

while (true)
{
  const number = Number(prompt("Enter a number between 1 - 100: "));
  if (Number.isInteger(number) && Number.parseInt(number) && number >= 1 && number <= 100)
  {
    console.log(`Thank you! You entered ${number}, a valid number.`);
    break;
  }
  else
  {
    console.log(`Sorry, ${number} is not a valid entry.`);
    }
}
