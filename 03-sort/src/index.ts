import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

/* NUMERICAL ARRAY SORTING */
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const arraySorter = new Sorter(numbersCollection);
arraySorter.sort();
console.log(numbersCollection.data);

/* CHARACTER ARRAY SORTING */
const charactersCollection = new CharacterCollection(`XaaYb`);
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
const llSorter = new Sorter(linkedList);
llSorter.sort();
linkedList.print();
