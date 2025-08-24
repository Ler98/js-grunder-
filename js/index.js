/*console.log("Hello, World!");

let a = 1;
let b = '1';
if(a == b); // true or false

console.log(a == b); // false, because '===' checks for both value and type


var greeting = 'Good bye world!';

{
    let greeting = 'Hello World';
}

//console.log(greeting);

let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
console.log(sentence.length);

//let name = "Kasper"; 
let halsning = `Hej, ${name} din gamle knasboll`;
console.log(halsning);

let fruits = ["banan", "kivi", "banan", "kivi", "banan"];
console.log(fruits);

fruits.unshift("appel");
fruits.push("pear");
console.log(fruits);

//let fruitsCopy = [...fruits];
//console.log(fruitsCopy);

let fruitsCopy = fruits.slice();
console.log(fruitsCopy);

let num = [1,5,78,7,122,3,4,65,40,2,8]
num.sort((a,b) =>{
    return a-b;
})
console.log(num);

let ae = [1,2,3];
let bc = [4,5,6];

const newArray = [...ae, ...bc];
console.log(newArray);



//let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
//let versal = names.map(name =>name.toUpperCase());
//console.log(versal);
*/

    let names = [
        { name: 'sixten', age: 32 },
        { name: 'Eva',    age: 19 }, 
        { name: 'Ali',    age: 67 },
        { name: 'Kim',    age: 13 },
        { name: 'Greger', age: 30 },
        { name: 'Alicia', age: 82 }
        ];


    //for (let i = 0; i < names.length; ++i) { 
       //if (names[i].age > 29) 
      // if(names[i].age > 18) {
       // continue;
       
       /*if(names[i].name == "Eva") break;
         console.log(names[i].name);
    
    }*/
        
  // for(let user of names) {
   // console.log(user.age);}     

   /* names.forEach(function(user, i) {
       // console.log(i)
        console.log(user);
    })*/

    const newUser = names.map(function(user) {
        console.log(user.name);
      // return user
       
    })
//console.log(newUser);


const eranamn = ["Lisa", "Emma", "Anna"]

names.forEach ((eranamn) => {})


let x = 10;
let y = 5;
console.log(x > y && y > 2);




let cat = false;
console.log(cat)

/*const number = function (tal, tal2) {
    const allanummer = `${tal} ${tal2}`
    return allanummer;
}
const resultat = number(10, 20);

console.log(resultat);
*/

/*const calc = (num1=0, num2=0) => num1 + num2;
sum = calc (10, 20)
console.log(sum);

let tom = [];
console.log(tom)

let text = "Hej";
console.log(text[1]);

let tal = [2, 4, 6];
tal.forEach(num => console.log(num * 3));
*/

/*let namn = "Emma";
for (let i = 0; i < namn.length; i++) {
  console.log(namn[i]);
}
*/

let name = "Lisa";
const test = function(names) {
    return `Hej, ${names}`;
}
const res = test(name);
console.log (res)

let tal = [1, 2, 3, 4];
let summa = 0;
tal.forEach(num => {
  summa += num;
});
console.log(summa);



const calc = function (num1=0, num2=0) {
     if (num1 > num2) {
        console.log (num1)
     }
      if (num2 > num1) {
        console.log (num2)
      }
    }
sum = calc(50, 5);   

let hej = "";
console.log(hej.length);


let b = 3;
if (a = 5);

console.log(a == b);

let c = 7;