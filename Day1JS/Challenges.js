//Challenge 1
//a
let car = {make: "volvo", year: 2011}
console.log(car)
//b
let carCopy = {...car};
console.log(carCopy)
//c
carCopy.year = 2018;
console.log(car)
console.log(carCopy)

//Challenge 2
var number = [1, 3, 5, 10, 11];
function makeListItem(number){
    return `<li>${number}</li>`
}
function changeSign(number){
    return number * -1;
}
function myMap(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem);
    });
    return arrayCopy;
}
let listItems2 = myMap(changeSign, number).join("");
console.log(listItems2)

//Challenge 3
var numbers = [1, 3, 5, 10, 11];
function makeListItem(number) {
  return `<li>${number}</li>`
}
let listItems = numbers.map(makeListItem).join("")
//console.log(listItems)
listItems = numbers.map(function (number) {
  return `<li>${number}</li>`
}).join("")
//console.log(listItems)
listItems = numbers.map(number => `<li>${number}</li>`).join("")
//console.log(listItems)
listItems = numbers.map(number => {
  return `<li>${number}</li>`
}).join("")
console.log(listItems)

//Challenge 4
var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]
const tableRows = members.map(member => `
<tr>
    <td>${member.name}</td>
    <td>${member.age}</td>
    <td>${member.gender}</td>
</tr>`).join("")

console.log(tableRows);

//Challenge 5
let name = { name: "Peter", age: 14, gender: "male" }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
function printObjectDetails(obj) {
  const count = -1;  //get the then number of properties
  console.log("This object has" + ${count} "properties")
  console.log("Keys and Values for the object are: ")
  for (const [key,value] of Object.entries(obj)){
      console.log(${key}: ${value});
  }
}
printObjectDetails(name)

//Challenge 6
var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]
let peter = { name: "Peter", age: 14, gender: "male" }
function addMayDriveProperty(member) {
    let clone = {...member};
    for (const [key, value] of Object.entries(member)) {
        if (key == "age" && value > 17) {
            clone.mayDrive = true;
        } else {
            clone.mayDrive = false;
        }
    }
    return clone;
}
const addJustedMember = addMayDriveProperty(peter)
console.log(addJustedMember)
console.log(peter)

//Challenge 7
var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]


function addMayDrivePropertyToAll(member) {
    let clone = { ...member }
    if (clone.age < 17) {
        clone.mayDrive = false;
    } else {
        clone.mayDrive = true;
    }
    return clone;
}
const addJusted = members.map(n => addMayDrivePropertyToAll(n));
console.log(members)
console.log(addJusted)

//Challenge 8
var members = [
    { name: "Peter", age: 14, gender: "male" },
    { name: "Jan", age: 35, gender: "male" },
    { name: "Janne", age: 25, gender: "female" },
    { name: "Martin", age: 22, gender: "male" }]

function removeGenderOnAll(member) {
    let clone = {...member};
    delete clone.gender;
    return clone;
}
const addJusted = members.map(n => removeGenderOnAll(n));
console.log(members)
console.log(addJusted)