let attempts = 0;
let maxAttempts = 3;
let password = "secret";

while (attempts < maxAttempts)
{
  const inputPassword = prompt("Enter your password:");
  attempts++;

  if (inputPassword == password)
  {
    console.log(`You entered the correct password after ${attempts} attempt(s).`);
    break;
  }
  else
  {
    if (attempts < maxAttempts)
    {
      console.log(`Incorrect password. You have ${maxAttempts - attempts} attempt(s) left.`);
    }
    else
    {
      console.log(`Your account is locked! You failed to enter the correct password ${maxAttempts} times.`);
      break;
    }

  }
}
