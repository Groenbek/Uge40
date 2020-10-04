var all = ["Hassan", "Peter", "Carla", "Boline"];
//4A
var resultA = all.join("#");
console.log(resultA);

//4B
var numbers = [2, 3, 67, 33];
var resultB = numbers.reduce(function (total, num) {
    return total + num;
})
console.log(resultB);
//4C
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

var reducer = function(accumulator, member, index, arr){
    let num = 0;
    arr.forEach(member => {
        num += member.age;
    })
    return num / arr.length;
}
let resultC = members.reduce(reducer);
console.log(resultC)