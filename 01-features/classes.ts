/* CONSIDER VEHICLE CLASS */
class Vehicle {
  // private drive(): void {
  //   console.log('vroom vroom');
  // }

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }

  brake(): void {
    console.log('screech');
  }
}

/* INITIALIZE CLASS INSTANCE */
const vehicle = new Vehicle('orange');

/* CALL FIELDS */
console.log(vehicle.color);

/* CALL INSTANCE METHODS */
// vehicle.drive();
// vehicle.honk();
vehicle.brake();

/* INHERITANCE */
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('brr');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

/* INSTANTIATE A NEW CAR */
const car = new Car(4, 'silver');

/* CALL INSTANCE METHODS OF INHERITED CLASS OBJECT */
// car.drive();
// car.honk();
car.brake();
