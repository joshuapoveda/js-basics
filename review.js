/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable

let variable = 0
const immutableVariable = 1

// 2.) Change the value of this variable

variable = 10


// 3.) Change the data type of this variable

variable = '10'

// 4.) Create another variable and the one from above to concatenate

let otherVar = 'UR-A '
let newVar = otherVar + variable

// 5.) Use any of the variables above or create new ones and print using string interpolation

let phrase = `He said: ${newVar}!`
console.log(phrase)


// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

console.log('Sabrina'.charAt(4))

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

console.log('Teddy'.charCodeAt(3))

// Using fromCharCode() - make it readable for us :). You'll see!

console.log(String.fromCharCode(100))

// Take your first and last name and concat()

let first = ['Joshua']
let last = ['Poveda']
console.log(first.concat(last))

// Create a string and make it return true using startsWith()

let str = 'Instance'
console.log(str.startsWith('I'))

// Now use any variable with endsWith() and return false

let str2 = 'Instancez'
console.log(str.endsWith('I'))

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, noticing it\'s deep red color.'
console.log(ozgur.includes('looked'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log(joshHadALittleLambOopsCow.indexOf('cow'))

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

console.log(vanessa.lastIndexOf('Vanessa'))

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"

console.log(noWeCantTeo.length + 'YEAH')

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

console.log(replaceGokuWithVegeta.replace('Goku','Picollo'))

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log(joshIsLookingForWifey.search('WiFeY 3'))

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7))

// Now using the pizza sentence, return only pizza (before the comma)

console.log(pizzaSentence.slice(0,5))

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
let names = (splitTheBill.split(' ').slice(0,2))
let names2 = (splitTheBill.split(' ').slice(-1))
console.log(names.concat(names2))
console.log(splitTheBill.split(' ').slice(0,2).concat(splitTheBill.split(' ').slice(-1)))

let i = 0
let empty = []
let emptyTest = splitTheBill.split(' ')
while(i < emptyTest.length){
  if(emptyTest[i]!=='and'){
  empty.push(emptyTest[i])
  }
  i++
}
console.log(empty)
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
console.log(splitTheBill.split(''))

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase())
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
let cuss = 'DANG IT'
console.log(`Dude, chill out. You can\'t just yell '${cuss.toLowerCase()}' out like that.`)
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toLocaleUpperCase())
console.log(jahlunSaidToPutSomeRespectToHisName.substring(0,3).toLocaleUpperCase()+'!')
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1,4))

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.slice(0,10))

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.slice(15))

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

let toTrim = "          Happy Birthday    "
console.log(toTrim.trim())

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d != a)
console.log(a < 15)
console.log(a < b + c)
console.log(c + b + a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

let kenSpins = 10
for(i = 0;i <= kenSpins;i++){
    room = kenSpins
}

console.log(`So far, Ken's room has spun ${room} times.`)

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

let teoSpins = 20;
for (i = 0; i <= teoSpins; i++) {
  room = teoSpins;
}

console.log(`So far, Teo's head has spun ${room} times.`);


// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

let teoSorrys = 20;
for (i = 0; i <= teoSorrys; i++) {
  console.log('I\'m sorry.');
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :)

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (thing in whateverQueenBeySaid) {
  console.log(thing)
}


// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (let lanaLetter in lana) {
  console.log(lanaLetter)
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

for (let word of tia) {
  console.log(word)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']

perscholas.forEach(myFunction)

function myFunction(name,index) {
  console.log('PS-' + name)
}

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() - adds a new item to the end of an array
// pop() - removes an item from the end of an array
// unshift() - adds a new item to the front of an array
// shift() - removes the first item in an array
// concat() - concatenates two or more array
// splice() - deletes and inserts new items in an array *overwrites original array
// slice() - produces a new array as a segment of another array *does not overwrite original array 
// sort() - sorts the elements of an array *overwrites the original array
// includes() - returns boolean value based on whether an item in present in an array *case sensitive
// indexOf() - provides the index of an item in an array
// length - provides the number of items in an array

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])

// Let's turn it up a notch. I won't tell you what array methods to use.

// Join all the elements of the array into a string separated by a space.

console.log(fruits.join(' '))

// Remove orange

console.log(fruits.pop())

// Add strawberry, kiwi, and grapes at the end

console.log(fruits.push('strawberry','kiwi','grapes'))

// Remove apple

fruits.shift()


// Add mango at the beginning of the array

fruits.unshift('mango')


// Add lemon, and grapefruit between mango and banana

fruits.splice(1, 0, 'lemon','grapefruit')


// Remove banana and strawberry

fruits.splice(3,2)

console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.

let exoticFruits = ['dragonfruits', 'Kumquat', 'papaya']

const allFruits = fruits.concat(exoticFruits)

console.log(allFruits)

// Print the last two exotic fruits without altering the newly concatenated array.

console.log(allFruits.slice(6))

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]

console.log(monalissaIsMessy.sort())

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]

console.log(mirrorMirrorOnTheWall.reverse())

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate
//the badword in his sentences.Must return a string sentence. Must use filter(). :) 

const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

let arrayOf = RafaelNoBadWords.split(' ')

let result = arrayOf.filter(func)
//filter returns new array

function func(item) {
  if (item != 'badword') {
    return item;
  }
}
console.log(result.join(' '))


// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]

function additionBot(accumulator, currentValue) {
  return accumulator + currentValue
}

console.log(99+5677+232+84+2+231)

console.log(numbersToAddUp.reduce(additionBot))

// ===== SPREAD OPERATOR =====

// Create a variable and assign a value of a copied array using the spread operator
let randomArr = ['1', '2','3']
let randomVar = [...randomArr]
console.log(randomVar)

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

let randomArr2 = ['4','5','6']

let newArr = [...randomArr,...randomArr2]

console.log(newArr)

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

console.log([...newArr, 'Extra num'])

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

console.log(["Extra num",...newArr]);


// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!

console.log(donutShop[1][0][1])

// Tosi wants ihatethis. :) Print!

console.log(donutShop[2][0][0][1][0]);


// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'

let teoIsAPerson = true
let teoIsAGender = "male";
let isHungry = false

if (teoIsAPerson === true) {
  console.log(true)
  if (teoIsAGender === "male") {
    console.log("You got it right!")
    if (isHungry === true) {
      console.log('Let\'s buy Teo some tacos!')
    } else {
      console.log('He doesn\'t need to eat.')
    }
  } else {
    console.log("WRONG");
  }
} else {
  console.log(false)
}

// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.

// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

let coolest = true

let finalStatement = coolest == true ? 'You got that right!' : 'James wants to argue'

console.log(finalStatement)


// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

let sayGreeting = function () {
  console.log('Hello, ma\'amsire')
}

sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.

const stringBot = (string) => {
  console.log(`This is my ${string}`)
}

stringBot('Word')

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

const add = function (num1, num2, num3) {
  return num1 + num2 + num3
}

console.log(add(3, 2, 45))
// Create a function called fightClub() that accepts a name parameter.  If the name:

// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts


const fightClub = (name) => {
//check IF name is pecisely the same as the name 'Teo' . If it is return a sentencte
  if (name === 'Teo') {
    return "1st rule: You do not talk about Fight Club.";
  } else if (name === 'Manara') {
    return "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.";
  } else if (name === 'Liv') {
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
  } else if (name === 'Devin') {
    return "4th rule: Only two guys to a fight.";
  } else {
    return 'No shirts'
  }
}

console.log(fightClub('Liv'))


// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print
//'Goodbye'.Invoke your hello function in some way to see Hello and Goodbye in the console.

//create a function that prints hello
//below the print statement, create a function and store it inside a variable called goodbye
//return the goodbye variable below the function body
//create an if statement that executes the code block in goodbye if the function hello receives a number greater or equal to 8
//return the goodbye function
//print hello with an argument of 9 to print both hello and goodbye

function hello(hour) {
  console.log('Hello!!!!!!!!!!!!!!!')
  if (hour >= 8) {
    let goodbye = function () {
      console.log('Goodbye!!!!!!!!!!!!!!!')
    }
    return (goodbye())
  }
}
console.log(hello(9))



// Create a function expression with your first name as the variable and then print your first and last name
//create a variable and save a function inside of it
//give the function a parameter of name
//return a template literal that prints the firstName parameter and my last name after it

let namePrinter = function (firstName) {
  return `My name is ${firstName} Poveda`
}

// Create an arrow function that accepts a number and have it return that number doubled

//create an arrow function that accepts a randomNum parameter
//return randomNum times 2
let arrFunc = (randomNum) => {
  return randomNum * 2
}

console.log(arrFunc(2))

// OBJECTS


// Create an object and call it human. Add a name, age, and location property. Give the properties values.

const human = {
  name: 'Jerry',
  age: 44,
  location: 'Seattle'
}

const orphan = {
  name: 'Simon',
  age: 12,
  state: 'NY',
  status: 'Ward',
  adopted: false
}

console.log(orphan)

// Access the name using dot notation

console.log(human.name)
console.log(orphan.state)
// Use object destructuring to access location Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const { age } = human
const { location } = human
console.log(location)
console.log(location,age)

const { adopted } = orphan

if (adopted === true) {
  console.log(orphan.adopted = false) 
} else (
  orphan.return = 'YES'
)

console.log(orphan)

/////

const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {ability: 'overgrow'},
    {ability: 'chlorophyll'}
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}


// Print overgrow
console.log(bulbasaur.abilities[0].ability)
// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!//
bulbasaur.sound() 

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)

bulbasaur.height = 7

console.log(bulbasaur)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1
console.log(bulbasaur)

///////Beacuse key names are strings!!!!

// Print an array that contains every single properties in bulbasaur

const arrayOfProps = (Object.entries(bulbasaur))
console.log(arrayOfProps)
console.log(arrayOfProps[4]);

// Print every single properties one by one in the console

const arrayOfProps2 = Object.keys(bulbasaur);
console.log(arrayOfProps2)


// Print an array that contains every single values in bulbasaur

const arrayOfProps3 = Object.values(bulbasaur);
console.log(arrayOfProps3);

