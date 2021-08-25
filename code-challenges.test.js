// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

describe("galaxyLife", () => {
  test("takes in an array of objects and returns an array with a sentence about each person with their names capitalized", () => {
    expect(galaxyLife(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

//declare function caller galaxyLife that takes in an array of objects
//map through array to pull out each object
//new variable called name to hold the value of the name key and split that name into an array > .split(" ")
//new variable called capName to map through each value(first and last name) of above name variable
//use .toUpperCase() on 0th index of each value and add the remainder of the string with concatenation(using .substring(1))
//return string interpolation of capName and occupation

const galaxyLife = (array) => {
  return array.map(value => {
    let name = value.name.split(" ")
    let capName = name.map(value => {
      return value[0].toUpperCase() + value.substring(1)
    }).join(" ")
    return `${capName} is a ${value.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainder", () => {
  test("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

//declare a function called remainder which takes an array argument
//use filter method to return an array with only numbers
//

const remainder = (array) => {
  let newArray = array.filter(value => {
    return typeof value === 'number'
  })
  return newArray.map(value => {
    return value % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumOfCubed", () => {
  test("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumOfCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfCubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

//declare function called sumOfCubed that accepts an array
//inside function declare variable, newArray, to hold result of mapped input
//map through array to pull out each value and return that value to the power of 3 (value ** 3)
//return the newArray with .reduce() method which adds up all numbers in the array
//.reduce() must take in 2 values, the accumulator and currentValue

const sumOfCubed = (array) => {
  let newArray = array.map(value => {
    return value ** 3
  })
  return newArray.reduce((accumulator, currentValue) => accumulator + currentValue) 
}