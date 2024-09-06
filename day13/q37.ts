
// Day 13 Challenge: 

// Question 37: Large Shirts: Default values in make_shirt().



function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); 
make_shirt("medium"); 
make_shirt("small", "Dive into Coding"); 



