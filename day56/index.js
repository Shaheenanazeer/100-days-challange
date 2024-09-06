// 1: Assignment result:

   let a = 2;
   let x = 1 + (a *= 2);
   // Now a = 4, x = 9 (the expression inside parentheses is evaluated first: a *= 2 sets a to 4, then 1 + 4 = 5, so x = 5)
   
   console.log("value of x:" , x);