
alert('apple' > 'pineapple'); // false
alert('2' > '12'); // true (lexicographically, '2' is greater than '12')
alert('banana' > 'pineapple'); // false (lexicographically, 'b' comes before 'p')


javascript
alert(5 > 4); // true
alert("apple" > "pineapple"); // false, because "apple" is less than "pineapple" in lexicographical order
alert("2" > "12"); // true, because "2" is greater than "12" in lexicographical order
alert(undefined == null); // true, because undefined and null are loosely equal
alert(undefined === null); // false, because they are not strictly equal (different types)
alert(null == "\n0\n"); // false, because null is not equal to any other value except undefined
alert(null === +"\n0\n"); // false, because they are not strictly equal (different types)


// Conditional branching: if, '?'

// "if" statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You are right!' );
}

// Boolean conversion
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  // code block
}

// "else" clause
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' );
}

// Several conditions: "else if"
if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

// Conditional operator '?'
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 16) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// Multiple '?'
let messages =  (age < 3) ? 'Hi, baby!' :
  (age < 16) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert (messages);

// Non-traditional use of '?'
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

// Tasks
// if (a string with zero)
if ("0") {
  alert( 'Hello' );
}

// The name of JavaScript
let name = prompt('What is the "official" name of JavaScript?', '');

if (name === "ECMAScript") {
  alert('Right!');
} else {
  alert("You don't know? ECMAScript!");
}

// Show the sign
let number = prompt('Enter a number:', 0);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// Rewrite 'if' into '?'
let result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite 'if..else' into '?'
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';


