
// 1. Union Type:
   let value: number | string;
   value = 10;
   console.log(value); // Output: 10
   value = "Hello";
   console.log(value); // Output: Hello
   
//    type literal
   type CarType = "sedan" | "SUV" | "hatchback";

   function displayCarType(carType: CarType): void {
       console.log("Car type:", carType);
   }
   
   displayCarType("sedan"); // Output: Car type: sedan
   displayCarType("SUV");   // Output: Car type: SUV
   displayCarType("hatchback"); // Output: Car type: hatchback
   
// 3. Nullable Type:
   
   let age: number | null;
   age = 18;
   console.log(age); // Output: 18
   age = null;
   console.log(age); // Output: null
   

// 4. Type Alias:
   
   type Point = {
     x: number;
     y: number;
   };

   let point: Point = { x: 5, y: 15};
   console.log(point); // Output: { x: 5, y: 15}
   

// 5. Intersection Type:
   
   
   type Printable = { print: () => void };
   type Loggable = { log: () => void };

   function logAndPrint(obj: Printable & Loggable) {
     obj.print();
     obj.log();
   }

   let obj = { print: () => console.log("Printing..."), log: () => console.log("Logging...") };
   logAndPrint(obj);
   // Output:
   // Printing...
   // Logging...
   

