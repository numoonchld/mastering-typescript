/* OBJECT */
const drink = {
  color: 'brown',
  carbonated: true,
  suger: 40,
};

/* TUPLE CREATION WITH TYPE ALIAS */
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
