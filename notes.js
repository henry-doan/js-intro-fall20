// Comment
// Datatypes
// Array
//   [ ]
// Hashes - Objects
//   { key: value }
// Boolean
//   true false
// Integer
//   12 1231
// String
//   Char
//   ""
//   ''
// Floats
//   1.2312
// Date DateTime
//   Wed Jan 27 2016 11:56:54 GMT-0700 (MST)
// undefined
// null
// NaN Not a number

// + - / * PEMDAS () %
// =
// ==
// ===
// <=
// >=
// <
// >
// !=
// !==

// && - and
// || - or

// Variables
// var name = 'bob'
// var firstName 
// firstNameAndLastName
  // -contains letters or numbers or underscores or dollarsigns.
  // - Start with letter, $, or _
  // - Case sensitive
  //   var name
  //   var Name
  // - don't use reserved words
  //   class, var, null, 
  // - descriptive
  //   var x 

 //  var balance = 1000 
 //  balance = 800
 //  ++
 //  --
 //  +=
 //  -=
 // *=
 //  /=
 //  console.log(balance)

// var planet = 'earth'
// var greeting = 'hi'

// console.log(greeting + planet)
// console.log("My planet is: " + planet)
// console.log("My number is: " + 3/2)
// console.log("My number is: \n \t\t\tadf" )
// console.log("solve for 3\\4" )

// var longString = "this is a long string"
// var shortString = 'short'

// console.log(longString.length)
// console.log(shortString.length)
// console.log(shortString.length > longString.length)
// console.log(longString.charAt(0))
// console.log(longString.charAt(18))
// console.log(longString.charAt(-18))
// var url = 'localhost:3001/dr/3/pt/4'
// var drId = url.charAt(7)

// Number
// 12
// 213
// -123
// 1.23123

// var num = Number("1")
// var num = Number("1.23")
// var num = Number("A")
// var num = Number("1A")
// var num = parseInt('1')
// var num = parseInt('1.2')
// var num = parseInt('1.9')
// var num = parseInt('1.9123124123')
// var num = parseInt('1A')
// var num = parseInt('A')
// var num = parseFloat('1234.13241234')
// var num = 5
// console.log(num.toString())

 // var num = 2.32234324
 // var num = 2.39
// console.log(num.toFixed(2))
 // console.log(num.toPrecision(2))

// Math
// //To get a random number between 0 and 1
// Math.random();

// //A random number between 0 & 6
// Math.random() * 7

// Math.min(5, 1, -17, 4);
// // => -17

// Math.max(1, 22, 4);
// // => 22

// Math.round(8.3);
// // => 8

// Math.round(8.6);
// // => 9

// Math.floor(8.6);
// // => 8

// Math.ceil(8.2);
// // => 9

// Math.PI
// // => 3.141592653589793

// Math.E
// // => 2.718281828459045

// Arrays
// var arr = []
// var arr = ['bob','jill', 'sally']
// var arr = ['bob', boolean, 1]
// - index 0 base
// console.log(arr[1])
// console.log(arr.indexOf('jill'))
// console.log(arr.join(','))
// console.log(arr.includes('bob'))
// console.log(arr.includes('bill'))
// arr.push('bill')
// arr.unshift('bill')
// arr.pop()
// arr.shift()
// arr.slice(1)
// console.log(arr)
// console.log(arr.slice(1))
// console.log(arr.length)
// console.log(arr.reverse())
// for(var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// arr.ForEach( function(name) {
//    console.log(name)
// })
// for (let name of arr) {
//   console.log(name)
// }

// arr.map( function(name) {
//   console.log(name)
// })

// var nums = [1,2,3,4,5,6,7,8,9]
// var evens = nums.filter( function(num) {
//   return num % 2 === 0
// })

// console.log(evens)

// var sum = nums.reduce( function(total, num) {
//   return total + num
// }, 0)

// console.log(sum)

// def total()
// end

// function grandTotal() {
  
// }

function cl(input) {
  console.log(input)
}

// cl('hello')

// Objects
// Hash key value 
// JSON key value 
// Instantiated Object(class)
// Context 

// var person = { name: 'bob', age: 132 }
// cl(person['name'])
// cl(person.name)
// cl(person.age)
// person.hobby = 'Code'
// person.age = 32
// cl(person)

// var ppl = {
//   names: ['Alex', 'bob', 'Charlie'],
//   roles: ['ta', 'student', 'admin']
// }

// cl(ppl.names[1])

// var ppl = [
//   { name: 'bob', age: 132 },
//   { name: 'jill', age: 23 },
//   { name: 'hank', age: 32 }
// ]

// JSON JS Object Notation

// {
//   "firstName": "John",
//   "lastName": "Doe"
// }

// var person = JSON.parse(object);
