/* CONSIDER FOLLOWING CODE WITHOUT ANY INTERFACES */
var oldCivic1 = {
    name: 'civic',
    year: 2000,
    broken: true
};
/* TYPE ANNOTATION FOR OBJECT ARGUMENT */
// ANNOTATION FOR OBJECT ARGUMENT PASSED TO BELOW FUNCTION IS EXCESSIVELY LONG
// AND BAD FOR CODE RESUSE! * /
var printVehicle1 = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken?: " + vehicle.broken);
};
printVehicle1(oldCivic1);
var printVehicle2 = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken?: " + vehicle.broken);
};
printVehicle2(oldCivic1);
var oldCivic2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "This " + this.name + " was made on " + this.year + "!";
    }
};
var printVehicle3 = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle3(oldCivic2);
var printSummary1 = function (item) {
    console.log(item.summary());
};
printSummary1(oldCivic2);
/* SHARED INTERFACE FIELDS ACROSS OBJECTS */
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has " + this.sugar + " grams of sugar";
    }
};
printSummary1(drink);
