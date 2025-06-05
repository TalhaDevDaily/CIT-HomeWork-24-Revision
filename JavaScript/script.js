"use strict";

const myArray = ["alu", "peyaj", "moric", "capsicum"];
console.log(myArray);

myArray.push("tomato");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift("hello");
console.log(myArray);

myArray.shift();
console.log(myArray);

// Delete method is not recommended, because it doesn't maintain the index order even after deletion
// delete myArray[2];
// console.log(myArray);

// Splice Deletion
// myArray.splice(0, 2);
// console.log(myArray);

// Splice Replace
myArray.splice(2, 3, "gajor", "potol");
console.log(myArray);

// Splice Take Place and push the rest to the side, without any removal
myArray.splice(2, 0, "pepe");
console.log(myArray);

// It returns array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

const newArray = myArray.slice(1, 3);
console.log(newArray);

const normalUser = ["clyde", "twick", "tolken", "wendy"];

const guestUser = ["randy", "ike", "craig", "jimmy", "butters"];

const admin = ["stan", "kyle", "eric", "kenny"];

const siteRegular = normalUser.concat(admin);
console.log(siteRegular);

const allUser = admin.concat(normalUser, guestUser);
console.log(allUser);

const family = guestUser[0].concat(admin[0], guestUser[1], admin[1]);
console.log(family);

const lovers = admin[0].concat(normalUser[(0, 1, 3)]);
console.log(lovers);
