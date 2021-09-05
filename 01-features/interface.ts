/* CONSIDER FOLLOWING CODE WITHOUT ANY INTERFACES */
const oldCivic1 = {
  name: 'civic',
  year: 2000,
  broken: true,
};

/* TYPE ANNOTATION FOR OBJECT ARGUMENT */
// ANNOTATION FOR OBJECT ARGUMENT PASSED TO BELOW FUNCTION IS EXCESSIVELY LONG
// AND BAD FOR CODE RESUSE! * /
const printVehicle1 = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle1(oldCivic1);

/* CREATE A NEW TYPE USING AN INTERFACE */
// INTERFACE NAME ALWAYS BEGINS WITH A CAPITAL LETTER!
interface Vehicle1 {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle1): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle2(oldCivic1);

// TYPE ANNOTATION WITHIN AN INTERFACE IS NOT LIMITED TO PRIMITIVE TYPES
// OTHER INTERFACES MAYBE ALSO BE SET AS THE TYPE FOR A FIELD
interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `This ${this.name} was made on ${this.year}!`;
  },
};

const printVehicle3 = (vehicle: Vehicle2): void => {
  console.log(vehicle.summary());
};

printVehicle3(oldCivic2);

/*
 * WHEN INTERFACE IS SET FOR THE INPUT OF A FUNCTION,
 * IT DOESNT MATTER IF THE ACTUAL OBJECT PASSED INTO THE FUNCTION HAS ADDITIONAL FIELDS
 */

interface Reportable {
  summary(): string;
}

const printSummary1 = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary1(oldCivic2);

/* SHARED INTERFACE FIELDS ACROSS OBJECTS */
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
printSummary1(drink);
