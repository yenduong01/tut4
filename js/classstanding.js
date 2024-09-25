let gradeStanding;
let units;

const name = prompt("Enter your name: ");

while (true)
{
  const units = Number(prompt("Enter completed units at college: "));
  if (Number.isInteger(units) && Number.parseInt(units) && units >= 0)
  {
    break;
  }
  else
  {
    console.log(`Sorry, ${units} is not a valid entry.`);
  }
}

if (units >= 0 && units <= 30)
{
  gradeStanding = "Freshman";
}
else if (units >= 31 && units <= 60)
{
  gradeStanding = "Sophomore";
}
else if (units >= 61 && units <= 90)
{
  gradeStanding = "Junior";
}
else
{
  gradeStanding = "Senior";
}

console.log(`Hello ${name}`);
console.log(`Your grade standing is ${gradeStanding}`);

