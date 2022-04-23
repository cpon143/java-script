/*let js = "amazing";
if (js === "amazing")
    // alert("JavaScript is FUN!");

20 + 60 + 80 - 90
console.log(20 + 60 + 80 - 90);
console.log("jons");
console.log(23);
  
let firstName="matinda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable namme conventions

let jons_matinda="JM";
let $function=22;

let person="jons";
let PI="3.1415";

let myFirstJob="coder";
let myCurrentJob="teacher";

let job1=("programmer");
let job2=("teacher");

console.log(myFirstJob); */

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 84);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof 1991);
console.log(1991);*/

/*let age=30;
age=31;
// console.log(age);
const birthYear=2002;
// birthYear=2000;

var job='programmer';
programmer='teacher';

lastName='haque';
console.log(lastName);*/

/*   Math operator    */

// const age = 2050;
// const jonsAge = age - 2012;
// const bonsAge = age - 1987;
// console.log(jonsAge * 2, bonsAge / 3, 2 ** 4);
// // 2**4 means 2 to the power four 2*2*2*2

// const firstName = 'Jonas';
// const lastName = 'Lomen';
// console.log(firstName + ' ' + lastName);

/*   Assignment Operator    */

// let x = 5 + 10;
// x += 10;
// x *=  4;
// x ++;
// x--;
// x--;
// console.log(x);

//comparison
// console.log(jonsAge < bonsAge);
// console.log(jonsAge >= 18);

// const isAgeFull = jonsAge >= 18;

/*const age = 2050;
const jonsAge = age - 2012;
const bonsAge = age - 1987;

console.log(age - 2012 >= age - 1987);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log( x , y); */


// codding challenge #1

// #Q1

/*let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

console.log(markMass, markHeight, johnMass, johnHeight);

let markBMI = johnMass / (johnHeight * johnHeight);
let johnBMI = markMass / markHeight ** 2;
const markHigherBmi = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBmi);*/

// let bmi = markMass/ markHeight ** 2 == johnMass / (johnHeight * johnHeight);

// console.log(bmi);

/*const firstName = 'jons';
const job = 'teacher';
const birthYear = 1987;
const year = 2022;

// console.log("i'm" + ' ' + firstName + ' ' + 'a' + ' ' + job + ' ' + (year - birthYear) + 'years' + ' ' + 'old');
const jonas="i'm" + ' ' + firstName + ' ' + 'a' + ' ' + job + ' ' + (year - birthYear) + 'years' + ' ' + 'old';
console.log(jonas);

const jonasNew= `i'm ${firstName} a ${job} ${year-birthYear} years old`;
console.log(jonasNew);

console.log(`Md Mazharul Haque`);

console.log(`This \n\is \n\monkey`);

console.log(`
Md
Mazharul
Haque`);*/

// If else

/*const age = 15;
const isToMuch = age >= 18;

if (isToMuch) {
    console.log(`Sarah try to drive 🚗`);
}
else {
    const yearLeft = 18 - age;
    console.log(`Sarah is to younger to drive wait ${yearLeft} years left `)
}

const birthYear=2012;
let century;
if(birthYear<=2000){
    century=20
    console.log(century);
}
else{
    century=21;
    console.log(century);
}*/

//#2 coding challenge

/*let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;


let markBMI = johnMass / (johnHeight * johnHeight);
let johnBMI = markMass / markHeight ** 2;

if(markBMI>johnBMI){
    console.log(`Mark's BMI is higher than John's!`);
}
else{
    console.log(`John's BMI is higher than Mark's! ${johnBMI-markBMI}` );
}*/


/*const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(typeof inputYear);

console.log(String(1998));
console.log(typeof NaN);
console.log(String('23'), 23);

console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('10' / '6');

let n = '1' + 1; //11
n = n - 1;
console.log(n);

m = '10' - '4' - '3' - 2 + '5';
console.log(m);*/


//five falsy value : 0 , ' ' , undefine , null , NaN ;

/*console.log(Boolean(0));
console.log(Boolean('Awasome'));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));

let money=2;
if(money){
    console.log('You can spent');
}
else{
    console.log('You cannt spent ');
}

let height=5;
if (height){
    console.log('yahh height is defined');
}
else{
    console.log('No not height "DEFINED"');
}*/

const age = '18';
if (age === 18) console.log('You are adult :D(stricts)');
if (age == 18) console.log('You are also adult:D(loose)');

let favourite = Number(prompt("what is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){
    console.log('yaa its 23 number');
}
else if(favourite===1){
    console.log('1 is also a cool number');
}
else if(favourite===2){
    console.log('2 is also a cool number');
}
else if(favourite===3){
    console.log('3 is also a cool number');
}
else if(favourite===4){
    console.log('4 is also a cool number');
}
else if(favourite===5){
    console.log('5 is also a cool number');
}
else if(favourite===6){
    console.log('6 is also a cool number');
}
else if(favourite===7){
    console.log('7 is also a cool number');
}
else if(favourite===8){
    console.log('8 is also a cool number');
}
else if(favourite===9){
    console.log('9 is also a cool number');
}
else if(favourite===10){
    console.log('10 is also a cool number');
}
else{
    console.log('you not enter 1......9 number,  and also 32');
}

if (favourite!==32){
    console.log('Why not 32?');
}