// for(let i = 10;i > 0; i--){
//     console.log(i)
// }
////////**************************
// x = [];
// for (y = 0; y < 1; y++) {
//   for (let i = 1; i < 10; i++) {
//     if (i % 2 != 0) {
//       x.push(i);
//     }
//   }
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//       x.push(i);
//     }
//   }
// }
// console.log(x.join());
////////**************************
// for(i = 1;i <= 60;i++){
//     if(i % 3 ==0){
//         console.log(i)
//     }
// }
///////**************************
// let x = '#'
// for(let i = 0;i <= 7;i++){
//   console.log(x)
//   x += '#'
// }
///////**************************
//Definition: A prime number is a natural number greater than 1 and
//not a product of two smaller natural numbers.
//Iterates through 20
//checks if first number is 1,2,3 and logs
//then checks if i divided by 2 produces a remainder
//then checks if i / 3 divided by 2 produces a remainder
// REVISIT!!!!!!!
// for (let i = 1; i <= 20; i++) {
//   if (i === 1) {
//     console.log(i + "Not Prime" + " and Odd");
//   } else if (i =got== 2) {
//     console.log(i + " Prime" + " and Even");
//   } else if (i === 3) {
//     console.log(i + " Prime" + " and Odd");
//   } else if (i % 2 === 0) {
//     console.log(i + " Not Prime" + " and Even");
//   } else if ((i / 3) % 2 == 1) {
//     console.log(i + " Not Prime" + " and Odd");
//   } else{
//     console.log(i + " Prime" + " and Odd");
//   }
// }
// REVISIT!!!!!!!
///////**************************
// let movies = ['Yojimbo','The Verdict', 'Akira']
// let moviesCopy = [...movies,'Tampopo'];
// let movieString = moviesCopy.join(' ')
// console.log(movieString)
///////**************************
// let x = 1
// while(x < 35){
//   if(x % 3 == 0){
//     console.log(x)
//   }
//   x++
// }
///////**************************
// let x = 1
// let limit = 100
// while(x < limit){
//   if(x % 5 == 0){
//     console.log(x)
//   }
//   x++
// }
///////**************************
// let min = 0
// let max = 20
// while(min < max){
//   if(min % 2 == 0){
//     console.log(min * 3)
//   }
//   min++
// }
////////**************************
// let min = 1;
// let max = 20;
// while (min < 20) {
//   if (min === 1) {
//         console.log(min + " Not Prime");
//       } else if (min === 2) {
//         console.log(min + " Prime");
//       } else if (min === 3) {
//         console.log(min + " Prime");
//       } else if (min % 2 === 0) {
//         console.log(min + " Not Prime");
//       } else if ((min / 3) % 2 == 1) {
//         console.log(min + " Not Prime");
//       } else{
//         console.log(min + " Prime");
//       }
//       min++
//     }
///////**************************
// const cost = 4
// let payment = 10
// let change = 10 - 4
// let quarters = 0
// while(change > 0){
//   quarters += 4
//   --change
// }
// console.log(quarters)
///////**************************
// let added = function(val1,val2,val3){
//   return val1 + val2 + val3
// }

// console.log(added(1,2,3))
///////**************************
// let addedAndDivide = (val1, val2, val3) =>
// (val1 + val2 + val3) / 3
// console.log(addedAndDivide(1, 2, 3));
///////**************************
// let quartersBack = function(cost,payment){
//   let change = payment - cost
//   let quarters = 0
//   while(change > 0){
//     quarters += 4
//     --change
//   }
//   return `You get ${quarters} quarters back.`
// }

// console.log(quartersBack(2,20))

///////**************************
// for(let i=0;i < 100; i++){
//   if(i % 3==0){
//     console.log(i+'Fizz')
//   } else if(i % 5==0){
//     console.log(i+'Buzz')
//   } else if {
//     console.log(i + 'FizzBuzz')
//   }
// }
///////**************************
// const car = {
//     color: 'blue',  
//     hp: 4000,
//     year: 1989
// }
// car.wheels = 'chrome'
// car.hp = 5000
// //All keys are strings
// // car is an object because it is a thing that requires a collection of variables to describe it
// //bracket notation works to search for items
// console.log(car)
///////**************************
// function computerArea(width, height) {
//   return `The area of a rectangle with a width of 
//   ${width} and a height of ${height} is ${width * height}.`;
// }
///////**************************

// console.log(computerArea(6, 4));

// let planetHasWater = function (planet) {
//   return planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars";
// };

// console.log(planetHasWater("earth"));
///////**************************
// Bonus Logical Question
// Let’s take the cookie quarter challenge and extend it to all possibilities.

// What if the cookie cost $2 and I paid with a 20?

// hint: incorporate parameters

// Bonus Logical Question
// Nando went to Uniqlo and bought himself a nice plaid shirt for $27.83. He paid with $100 as he had no change. The cashier paid returned his change in large denominations since they needed change for the other customers.

// Write a loop that prints out how many bills he received in return in as large denominations as possible.
///////**************************

//Function declaration --> Are able to be hoised
// function dummyFunc() {
    
//}
// //Function expression
// let dummyFunc2 = function () {    
// }

//arrow func --> implicit return of a single expression, behaves oddly with the this. keyword
//const dummyfunc3 = () => { }

//Terms: call, invoke, execute, and run a function
//parameters become local variables within the function
///////**************************
//dummyarray = [1,'one']
//the following is an example of using a rest parameter which produces an array
// //and can take in multiple arguments
// function getObject(name, ...dummyarray) {
//   return {
//     Name: name,
//     array: dummyarray
//   }

// }

// console.log(getObject('Fanny', dummyarray, '3', true))
///////**************************
// //the arguments object allows us to search and retrieve any arguments passed to the function by index

// function getObject2(stringSet) {
//     return arguments[0]
// }

// console.log(getObject2('jump','around','and','get','down'))
///////**************************

// const defaultExample = (item, price, tax = 60) => {
//     return item + ' ' + ' ' + price + ' ' + tax
    
// }

// console.log(defaultExample('spoon',3,))
///////**************************
//Example of Anonymous function being fed into a forEach function
// var a = ["red", "green", "blue"];

// a.forEach(function (color) {
//   console.log(color);
// });
///////**************************

// A recursive function typically has three parts

// the base case: when the process can stop
// the action: what to do (the meat and potatoes)
// the recursive call: Invoking itself, but in such a way that we get closer to the base case

//call stack example
// function factorial(n) {
//   if (n <= 0) return 1;
//   //console.log(`Will return ${n} * factorial(${n - 1})`);
//   return n * factorial(n - 1);
// } 

// console.log(factorial(4))
///////**************************

//????
// let memo = {};
// function fibMemo(n) {
//   if (n <= 1) return n;
//   if (memo[n]) return memo[n];
//   console.log(`I have to add ${n} to the stack`);
//   let result = fibMemo(n - 1) + fibMemo(n - 2);
//   memo[n] = result;
//   return result;
// }

// fibMemo(24)
///////**************************


// class Vehicle {
//   constructor(vin, make,model) {
//       this.vin = vin;
//       this.make = make;
//       this.model = model;
//     // return is not needed
//     // because the new object is returned by default
//   }
// }

// const plane = new Vehicle("X123Y", "Boeing", '757')

// console.log(plane)

///////**************************

// const adventurer = {
//   name: "Timothy",
//   hitpoints: 10,
//   belongings: ["sword", "potion", "Tums"],
//   companion: {
//     name: "Velma",
//     type: "Bat",
//     companion: {
//       name: "Tim",
//       type: "Parasite",
//       belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
//     },
//   },
// };

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }
// console.log(adventurer.companion.name)
// console.log(adventurer.companion.companion.belongings[0])
// ///////**************************

// const movies = [
//   { title: "Tokyo Story" },
//   { title: "Paul Blart: Mall Cop" },
//   { title: "L'Avventura" },
// ];

// console.log(movies[0].title)

// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i].title);
// }

// ///////**************************

// class Foo {
//   constructor(name) {
//     this.name = name;
//   }

//   getNameSeparator() {
//     return '-';
//   }
// }

// class FooBar extends Foo {
//   constructor(name, index) {
//     super(name);
//     this.index = index;
//   }

//   getFullName() {
//     return this.name + super.getNameSeparator() + this.index;
//   }
// }

// const firstFooBar = new FooBar('foo', 1);

// console.log(firstFooBar.name);
// // Expected output: "foo"

// console.log(firstFooBar.getFullName());
// // Expected output: "foo-1"

///////**************************

//FACTORY

// //object of Car
// class Car {
//   constructor(maker, serialNumber,colors) {
//     this.serialNumber = serialNumber;
//       this.maker = maker;
//       this.colors = colors
//   }
//   drive() {
//     console.log("Vroom Vroom");
//   }
// }
// //on instance of a an object (newCar)
// const newCar = new Car("Mazda", 12345);
// //console.log(newCar);

// //A factory that creates Car objects for us
// class Factory {
//   constructor(company) {
//     this.company = company;
//     this.cars = [];
//   }
//     //this method uses the Car class to make the object while pushing it to an array
//     //What we get is an array of objects, each one the result of call the generateCar()
//     //method.
//   generateCar() {
//     const newCar = new Car(this.company, this.cars.length);
//     this.cars.push(newCar);
//   }
//     //This finds a specific object in our array of objects
//   findCar(index) {
//     return this.cars[index];
//   }
// }
// const tesla = new Factory("Tesla");

// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();

// console.log(tesla);
// console.log(tesla.findCar(0));

// const porche = new Factory("Porche");
// porche.generateCar();
// porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(0));
///////**************************
// class colorPicker {
//   static colors() {
//     return ["blue", "green", "brown"];
//   }
//     static test() {
//       return "HELLO WORLD IN RED"
//   }
//   // rest of class definition here...
// }
// console.log(colorPicker.test())

// more code...
// const whip = new Car(
//   "Honda",
//   30,
//   colorPicker.colors()[2]
// )

// const test = new Foo('Me')
// console.log(test)
// test.name = colorPicker.colors()
// console.log(test)

// console.log(whip)
///////**************************


