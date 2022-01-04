//this line will print string inside it
console.log('good morning');
//variable declaration
let firstName= 'shubham';
let lastName = 'hirani';
let age= 21;
const birthYear = 2001

//this line will print first and last name with the help of variable
console.log(firstName + ' ' + lastName);

console.log(age);

//declare object
let friend = {
    firstName: 'daxesh',
    lastName: 'italiya',
    age: 20
}

//print the object
console.log(friend);

//make an array
let details = ['VGEC', 'computer engineering', 9.17];
details[4] = 45;
//print an array
console.log(details);

//creating a function
function printNameWithDetails(){
    console.log(firstName +' ' + lastName+' ' + age +' ' + details);
}

//calling a function
printNameWithDetails();

function returnOnlyName(firstName){
    return firstName;
}

let duplicate = returnOnlyName('shubham');
console.log(duplicate);