// Enum
var Cities;
(function (Cities) {
    Cities[Cities["Lahore"] = 0] = "Lahore";
    Cities[Cities["Karachi"] = 1] = "Karachi";
    Cities[Cities["Islamabad"] = 2] = "Islamabad";
    Cities[Cities["Peshawar"] = 3] = "Peshawar";
    Cities[Cities["Quetta"] = 4] = "Quetta";
    Cities[Cities["Multan"] = 5] = "Multan";
})(Cities || (Cities = {}));
var currentCity = Cities.Karachi;
console.log("Current city is ".concat(Cities[currentCity]));
