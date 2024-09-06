// Question 45: Cars: Create detailed car objects with flexible properties.
function createCar(brand, model, year, color, mileage, features) {
    var car = { brand: brand, model: model, year: year, color: color, mileage: mileage, features: features };
    return car;
}
var myCar = createCar("honda", "BMW", 2022, "Silver", 5000, ["Bluetooth", "Backup camera"]);
console.log(myCar);
