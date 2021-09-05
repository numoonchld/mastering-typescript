"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
/* NUMERICAL ARRAY SORTING */
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var arraySorter = new Sorter_1.Sorter(numbersCollection);
arraySorter.sort();
console.log(numbersCollection.data);
/* CHARACTER ARRAY SORTING */
var charactersCollection = new CharacterCollection_1.CharacterCollection("XaaYb");
var stringSorter = new Sorter_1.Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
var llSorter = new Sorter_1.Sorter(linkedList);
llSorter.sort();
linkedList.print();
