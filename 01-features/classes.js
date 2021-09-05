var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* CONSIDER VEHICLE CLASS */
var Vehicle = /** @class */ (function () {
    // private drive(): void {
    //   console.log('vroom vroom');
    // }
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('beep beep');
    };
    Vehicle.prototype.brake = function () {
        console.log('screech');
    };
    return Vehicle;
}());
/* INITIALIZE CLASS INSTANCE */
var vehicle = new Vehicle('orange');
/* CALL FIELDS */
console.log(vehicle.color);
/* CALL INSTANCE METHODS */
// vehicle.drive();
// vehicle.honk();
vehicle.brake();
/* INHERITANCE */
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log('brr');
    };
    Car.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
/* INSTANTIATE A NEW CAR */
var car = new Car('silver');
/* CALL INSTANCE METHODS OF INHERITED CLASS OBJECT */
// car.drive();
// car.honk();
car.brake();
