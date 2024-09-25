let number;

while (true)
{
  number = Number(prompt("Enter a number: "));
  if (Number.isInteger(number) && Number.parseInt(number))
  {
    break;
  }
  else
  {
    console.log(`Sorry, ${number} is not a valid entry.`);
  }
}


for (let i = 0;  i <= 10; i++)
{
  console.log(`${number} x ${i} = ${number * i}`);
}