"use strict";
let firstName = "bright";
let lastName = "Ebuka";
let age = 23;
let hobbies = ["coding", "Reading", "Essting"];
let myArr = ["bright", true, 1];
// tupple in ts is having an array with multiple data type. THis data type must follow accordingly
myArr.push("hello");
console.log(myArr);
// to declare a variable
let myName = "bright";
var str = "1";
var str2 = str;
console.log(typeof str2);
let data = "20";
console.log(data);
data = "string";
let num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
num.forEach((num) => {
    console.log(num);
});
// const newFunct = (email:string, username:string) =>{
// }
const restParams = (...num) => {
    var i;
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
        console.log("sum of number", sum);
    }
};
restParams(1, 3, 4, 5, 6, 2, 4, 5);
// using for..of loop
let foodCart = ["Amala", "Eba", "Semolina", "Wheat"];
for (const food of foodCart) {
    console.log(food);
}
let userContact;
userContact = [
    {
        id: 1,
        firstName: "Bright",
        job: "Software Engineer",
        location: "Lagos",
    },
    {
        id: 2,
        firstName: "Ebuka",
        job: "Frontend Engineer",
        location: "Offa",
    },
    {
        id: 3,
        firstName: "Obodo",
        job: "React Developer",
        location: "Remote",
    },
];
for (const user of userContact) {
    console.log(user);
}
userContact.map((user) => console.log(user));
