// A generic function that returns the input value as is

function returnType<T>(val: T): T {
    return val;
  }
  
  // Usage of the generic function with different types
  const numValue: number = returnType<number>(50);
  const strValue: string = returnType<string>("isha");
  const boolValue: boolean = returnType<boolean>(true);
  const arrValue: number[] = returnType<number[]>([5, 6, 7, 8]);
  
  console.log(`Number Value: ${numValue}`);
  console.log(`String Value: ${strValue}`);
  console.log(`Boolean Value: ${boolValue}`);
  console.log(`Array Value: ${arrValue}`);