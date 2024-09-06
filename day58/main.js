//  Logic Operators (AND, OR, NOT)

// 1. What's the result of OR?


alert( null || 2 || undefined );


// 2. What's the result of OR'ed alerts?


alert( alert(1) || 2 || alert(3) );


// 3. What is the result of AND?


alert( 1 && null && 2 );


// 4. What is the result of AND'ed alerts?


alert( alert(1) && alert(2) );


// 5. The result of OR ANd
alert( null || 2 && 3 || 4 );


// 6. Check the range between

let Age = prompt("Enter your age:");

if (age >= 14 && age <= 90) {
  alert("Age is between 14 and 90");
} else {
  alert("Age is not between 14 and 90");
}


// 7. Check the range outside


let age = prompt("Enter your age:");

if (!(age >= 14 && age <= 90)) {
  alert("Age is not between 14 and 90");
} else {
  alert("Age is between 14 and 90");
}


// 8. A question about "if"


if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );


//  Nullish Coalescing Operator (??)

// 1. What is the code below going to output?


let users;
alert(users ?? "Anonymous");


// 2. Here’s the example with user assigned to a name:


let user = "John";
alert(user ?? "Anonymous");


// 3. We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.


let firstName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous");


// 4. The nullish coalescing operator ?? vs ||


let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0


// 5. Using ?? with && or ||


let x = (1 && 2) ?? 3;
alert(x); // 2


