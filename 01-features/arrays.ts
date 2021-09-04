/* TYPED ARRAY */
const carMakers: string[] = ['ford', 'toyota', 'honda'];
const dates: Date[] = [new Date(), new Date()];

/* NESTED TYPES ARRAY */
const carsByMake: string[][] = [['f150', 'supra', 'civic']];

/* ANNOTATION HELPS WITH INFERENCE WHEN EXTRACTING VALUES */
const car = carMakers[0];
const myCar = carMakers.pop();

/* PREVENT INCOMPATIBLE VALUES */
carMakers.push(100);

/* HELPS WITH MAP */
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

/* MULTIPLE TYPES IN ARRAYS */
const imporatantDates: (Date | String)[] = [new Date(), '2030-10-10'];
imporatantDates.push('2030-10-11');
imporatantDates.push(new Date());
