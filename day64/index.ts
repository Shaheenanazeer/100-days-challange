
  // TYPE ANNOTATIONS WITH OBJECTS 
 

// Method 1: Defining type annotations separately and then assigning values
let personExOne: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
};

personExOne = {
  name: "Aliya",
  age: 20,
  jobTitle: "teacher",
  address: {
    street: "123 Main St",
    city: "islamabad",
  },
};
  
// Method 2: Defining type annotations and assigning values in one step
let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Aliya",
  age: 20,
  jobTitle: "teacher",
  address: {
    street: "123 Main St",
    city: "islamabad",
  },
};

