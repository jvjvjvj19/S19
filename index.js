console.log("Hello World");

let username, password, role;

function login() {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role:");

  if (!username || !password || !role) {
    alert("Input should not be empty!");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
    }
  }
}

function calculateAverage(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  let avg = Math.round(average);
  console.log(avg);

  if (avg <= 74) {
    console.log(`Hello, student, your average is ${avg}. The letter equivalent is F`);
  } else if (avg >= 85 && avg <= 89) {
    console.log(`Hello, student, your average is ${avg}. The letter equivalent is B`);
  } else if (avg >= 90 && avg <= 95) {
    console.log(`Hello, student, your average is ${avg}. The letter equivalent is A`);
  } else if (avg > 96) {
    console.log(`Hello, student, your average is ${avg}. The letter equivalent is A+`);
  }
}

login();
calculateAverage(80, 85, 90, 95);