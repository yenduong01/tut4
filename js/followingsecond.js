let hours;
let minutes;
let seconds;



while(true)
{
  hours = Number(prompt("Enter hours: "));
  if (Number.isInteger(hours) && Number.parseInt(hours) && hours >= 0 && hours <= 24) 
  {
    break;
  }
  else
  {
    console.log(`Sorry, ${hours} is not a valid entry.`);
  }
}

while (true)
{
  minutes = Number(prompt("Enter minutes: "));
  if (Number.isInteger(minutes) && Number.parseInt(minutes) && minutes >= 0 && minutes <= 60)
  {
    break;
  }
  else {
    console.log(`Sorry, ${minutes} is not a valid entry.`);
  }
}
 
while (true)
{
  seconds = Number(prompt("Enter seconds: "));
  if (Number.isInteger(seconds) && Number.parseInt(seconds) && seconds >= 0 && seconds <= 60)
  {
    break;
  }
  else {
    console.log(`Sorry, ${seconds} is not a valid entry.`);
  }
}

console.log(`Input time: ${hours}:${minutes}:${seconds}`);

seconds++;
if (seconds == 60)
{
  seconds = 0;
  minutes++;
  if (minutes == 60)
  {
    minutes = 0;
    hours++;
    if (hours == 24)
    {
      hours = 0;
    }
  }
}

console.log(`Increased time: ${hours}:${minutes}:${seconds}`);



