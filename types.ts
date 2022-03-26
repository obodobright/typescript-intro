let strings: string;
let numbers: number;
let booleans: boolean;
let annys: any;
// first method of declaring array
let strrArr: string[];
let nummArr: number[];
let boolsArr: boolean[];
// second method
let otherString: Array<string>;
let otherNumber: Array<number>;
let otherBools: Array<boolean>;
// tuple
let stringNumTuple: [string, number];
// void
let myVoid: void;
// null
let myNull: null = null;
// undefined
let myUndefined: undefined = undefined;

let newStirng: string = "Blessings";
console.log(newStirng);

// create a variable
let myString: string;
myString = "Heloo world";
let firstLetter: string;
firstLetter = myString.charAt(0);
// myString.charAt(0);
console.log("first", firstLetter);
let studentName: string;
studentName = "Sankora";
let items: string;
items = "Eggs";
let myContact: string;

console.log(myString, items, studentName);
// create a number
let contact: number;
contact = 20;
let amount: number;
amount = 30 / 10;
let phone: number;
phone = 09064892235;
console.log(phone);
console.log(amount);
console.log(contact);

//create a boolean - declare a boolean with the name of the variable and add boolean as data type
let loading: boolean;
loading = false;
let isPending: boolean;
isPending = false;
let isError: boolean;
isError = false;
console.log(isPending, isError);
// create a data of any
let time: any;
time = new Date();
console.log(time);
let date: any;
date = new Date().toLocaleDateString();
console.log(date);
// create an array
// first method
let strArr: string[];
strArr = ["bright", "obodo", "Ebuka"];
let scoreArr: number[];
scoreArr = [5, 10, 15, 20];
let loadArr: boolean[];
loadArr = [true, false, false];

// second method
let newStrArr: Array<string>;
newStrArr = ["stella", "amina", "ahmed"];

// tuple : this is an array with defined number of elements
let strNumTuple: [string, number];

strNumTuple = ["warisi", 4];
let numVoid: void;

numVoid = undefined;
