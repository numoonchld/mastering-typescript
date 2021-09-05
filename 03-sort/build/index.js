"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// import { Sorter } from './Sorter';
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
/* NUMERICAL ARRAY SORTING */
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
// // const arraySorter = new Sorter(numbersCollection);
// arraySorter.sort();
console.log(numbersCollection.data);
// /* CHARACTER ARRAY SORTING */
var charactersCollection = new CharacterCollection_1.CharacterCollection("XaaYb");
charactersCollection.sort();
// const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
// const llSorter = new Sorter(linkedList);
// llSorter.sort();
linkedList.sort();
linkedList.print();
