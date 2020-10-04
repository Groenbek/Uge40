// Using existing functions that takes a callback as an argrument
// 1A
var names = ["Hassan", "Peter", "Boline", "Frederik", "Jens", "Frederik", "Anders And"];
var aAsFirstLetter = names.filter(n => n.startsWith("A"));

console.log(aAsFirstLetter);
// 1B Reverse names
var reverseNames = names.map(n => n.split("").reverse().join(""));

console.log(reverseNames);