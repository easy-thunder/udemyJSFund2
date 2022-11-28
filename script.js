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


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'Teacher',
friends: ['Michael','Peter','Steven'],
hasDriversLicense: true,

//calcAge: function(birthYear){
  //  return 2037- birthYear;
//},

//calcAge: function (){
  //  return 2037 - this.birthYear;
//}

calcAge: function (){
    this.age =2037 - this.birthYear;
    return this.age;
},
getSummary: function(){
    this.summary = `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    return this.summary;
}
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
console.log(jonas.summary)

const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    },

}

const john = {
    firstName: `John`,
    lastName: `smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    },

};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (john.calcBMI() > mark.calcBMI()){
    console.log (`${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s (${mark.BMI}) BMI!`)
}
else if (mark.BMI > john.BMI){
    console.log (`${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s (${john.BMI}) BMI!`)
}

for(let rep = 1; rep<=10; rep++){
    console.log(`Lifting weights repetitions ${rep}`);
}

const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

const types = [];
for(let i = 0; i < jonasArray.length; i++){
    //reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);
    // filling types array
    //types [i] = typeof jonasArray [i];
    types.push(typeof jonasArray[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
   ages.push( 2037 - years[i]);  
}

console.log(ages);

// continue and break
console.log('only strings')
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'number') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
};

for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
};

const jonas = [
    'jonas',
    'Shmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
// 0,1,2,3,4
//4,3,2,1,0
for (let i = jonas.length-1; i>=0; i--){
    console.log(jonas[i]);
}

for(let excercise = 1; excercise < 4; excercise++){
    console.log(`Starting excercise ${excercise}`);
    for (let rep = 1; rep < 6; rep++){
        console.log(`lifting weight repetition ${rep}`);
    }
}

for (let rep = 1; rep < 11; rep++){
    console.log(`lifting weight repetition ${rep}`);
};
let rep =1;
while (rep<= 10){
    console.log(`WHILE Lifting weights repetition ${rep}`);
    rep++;
};

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
if (dice === 6){
    console.log('loop is about to end...');
}
    
}


const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52,
]
const tips = [];
const totals = [];

function calcTip(){
    for(let i=0;i<bills.length; i++){
       if(bills[i]<50 || bills[i] > 300){
         this.tip = bills[i]*.2
        }
      else{this.tip = bills[i]*.15};
        

      tips.push(this.tip);
      totals.push(this.tip+bills[i]);
    }
}
calcTip()
console.log(tips);
console.log(totals);
const newArray=[
    534, 435, 2465, 345, 123, 456, 
]


//my way of figuring out the average of any array
const calcAverage = function(arr){
    
    let sum = 0;
    let average;
    for(let x=0; x < arr.length; x++){
        
        sum += arr[x];
    
        
       if(x==arr.length-1){ 
        console.log(sum);
        average = sum/arr.length};
       console.log(average);
        

    }
}
calcAverage(newArray)

// code along of finding the average of any array

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
       // sum = sum + arr[i];
       sum += arr[i];
    }

    return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
*/










