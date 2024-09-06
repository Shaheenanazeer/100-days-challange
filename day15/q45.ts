// Question 45: Cars: Create detailed car objects with flexible properties.

interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
  mileage?: number;
  features?: string[];
}

function createCar(brand: string, model: string, year: number, color: string, mileage?: number, features?: string[]): Car {
  const car: Car = { brand, model, year, color, mileage, features };
  return car;
}

const myCar: Car = createCar("honda", "BMW", 2022, "Silver", 5000, ["Bluetooth", "Backup camera"]);

console.log(myCar);