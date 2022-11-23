`use strict`;

/*let hasDriversLicense = true;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');*/

/*function fruitProcessor(apples, oranges) {
    console.log(apples,oranges);
    const juice =`juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor (5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*//*
const age1 = calcAge1(1991);

function calcAge1(birthYear){
    return 2037 - birthYear;
    
}



const calcAge2 = function(birthYear){
    return 2037 - birthYear;
   
}
const age2 = calcAge2(1991);
console.log(age1, age2);


const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));



function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice =`juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
console.log(fruitProcessor(2,3));

const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge (birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        return `${firstName} retires in ${retirement} years`;
    }
    else{ return`${firstName} is ready to retire`};
}
yearsUntilRetirement(1991, `Jonas`);
console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `Mike`));

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [
    `Michael`, `Steven`, `Peter`
];
console.log(friends);


const y = new Array (1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length-1]);


friends [2] = 'Jay';
console.log(friends);
const firstName = `Jonas`;
const Jonas = [firstName, `Scmedtmann`, 2037-1991,
`teacher`, friends];
console.log(Jonas);


const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const friends = [`Michael`,`Steven`, `Peter`];
const newLength = friends.push(`jay`);
console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

friends.pop();
console.log(friends);

console.log(friends.indexOf(`Steven`));
friends.push(23);
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if(friends.includes('steven')){
    console.log(`You have a friend called Steven`);

}*/
//coding Challenge #2
/*
function calcTip(bill){
    if(bill<50 || bill > 300){
        return bill * .20}
        else {
            return bill * .15
        }
    
};
const bills = [
    125,
    555,
    44,
];



const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
    
];
console.log(tips);

const total = [
    bills[0] + calcTip(bills[0]),
    bills[1] + calcTip(bills[1]),
    bills[2] + calcTip(bills[2]),
];
console.log(total);


const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']
];
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
friends: ['Michael','Peter','Steven'],
};
console.log(jonas);
console.log(jonas["lastName"]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);

}
else{
    console.log("wrong request")
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/















