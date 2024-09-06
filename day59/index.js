// 1. While loop:

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


// 2. For loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// switch statement
let browser = prompt("Enter your browser name:");

switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too');
    break;
  default:
    alert('We hope that this page looks ok!');
}

