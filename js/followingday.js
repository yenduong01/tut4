let followingDay;
let day;

while (true)
{
  day = prompt("Enter a day of the week (three-letter abbreviation in lower case): ");
  if (day == "mon" || day == "tue" || day == "wed" || day == "thu" || day == "fri" || day == "sat" || day == "sun")
  {
    break;
  }
  else
  {
    console.log(`Sorry, ${day} is not a valid entry.`);
  }
}


if (day == "sun")
{
  followingDay = "mon";
}
else if (day == "mon")
{
  followingDay = "tue";
}
else if (day == "tue")
{
  followingDay = "wed";
}
else if (day == "wed")
{
  followingDay = "thu";
}
else if (day == "thu")
{
  followingDay = "fri";
}
else if (day == "fri")
{
  followingDay = "sat";
}
else
{
  followingDay = "sun";
}

console.log(`You entered: ${day}`);
console.log(`The following day is: ${followingDay}`);