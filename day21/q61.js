// Day 21 Challenge:  
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
