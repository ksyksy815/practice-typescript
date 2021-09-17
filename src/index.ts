/* NOTES
* Type inference

Commands
tsc -- init
=> creates a ts config file "tsconfig.json"

*/

let id: number = 5
let company: string = 'Hello Seo'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

// an Array that only contains numbers
let ids: number[] = [1, 2, 3, 4, 5]
// ids.push('Hello') => error

// An array if you don't know what types would go in
let arr: any = []

// Tuple
let person: [number, string, boolean] = [1, 'String', true]
// let person: [number, string, boolean] = [1, 'String', 'I'm not boolean'] => error

// Tuple Array
let employee: [number, string][]
employee = [
  [1, 'String 1'],
  [2, 'String 2'],
  [3, 'String 3'],
]
/* employee = [
  [1, 'String 1'],
  [2, 'String 2'],
  ['Three', 'String 3'],
] => error
*/

// Union: when you want to allow more than two types for a variable.
let order: string | number = 22
order = '22'

// Enums (numerated types): allows to define a set of named constants either numeric or string.
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

/*
console.log(Direction1.Up) <-- 1
console.log(Direction1.Left) <-- 3
*/

// Also possible to set them as strings
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

/*
console.log(Direction2.Left) <-- 'Left'
*/

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

/*
const user: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'John'
}
*/

// Type Assertion
// = explicitly telling the compiler that we want to treat an entity with different types.
let cid: any = 1

// When you want to create a value based on another value.
// There are two ways: (1) <number> or (2) as number
let customerId1 = <number>cid
// customerId1 = true <-- Error. 

let customerId2 = cid as number

// Functions
// Not specifying types of parameters will throw an error unless the "noImplicitAny" option in the config file is abled.
/* Example of a function with no types for parameters:
function addNum(x, y) {
  return x + y
}
*/

// Function: when there is a return value
function addNum (x: number, y: number): number {
  return x + y
}

// Function: when there is no return value
function log (message: string | number): void {
  console.log(message)
}


// Interfaces
// Custom type, specific structure to an object or function.
// Very similar to the custom type for an object.

interface UserInterface  {
  id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

/* type vs. interface
=> A type can be used with primitives and unions, whereas an interface cannot.
ex) type Point = number | string
const p1: Point = 1
*/

/* Optional property
Putting a question mark next to a property means that particular property is optional.
ex) age?: number
*/

/* Making a property readonly
ex) readonly id: number
user1.id = 5 <-- error
*/

// Using interface with functions
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
// const add: MathFunc = (x: number, y: string): number => x + y
// => Error because string type cannot be assigned to Type MathFunc.

const subtract: MathFunc = (x: number, y: number): number => x - y



// Classes
// Implemeting interface with a class
class Person {
  private id: number
  name: string

  // constructor runs as soon as this Person class gets instantiated.
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

const john = new Person(0815, 'John')
const jane = new Person(0803, 'Jane')

/* Access modifiers or data modifiers
class Person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}
=> In this case, id and name are public by default.
We can access and change them.
ex) brad.id = 5 <-- possible.

It is possible to make them private / protected
- private: You can only access this property within the class. Console.log is also not possible!
- protected: only accessible within this class Person or any class that is extended from this Person class.

*** private vs. protected: Protected ones are accessible from extending class, whereas private ones are not!

- public: You can do this but it's the same thing as not writing anything.

ex)
class Person {
  private id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}
*/

// Methods in class
class Character {
  id: number
  name: string
  job: string

  constructor(id: number, name: string, job: string) {
    this.id = id
    this.name = name
    this.job = job
  }

  introduce () {
    return `Hi, I'm ${this.name}.`
  }
}

const harry = new Character (1, 'Harry', 'wizard')
console.log(harry.introduce())

// Implementing interface to class
interface CharacterInterface {
  id: number
  name: string
  job: string
  introduce(): string
}

class Character2 implements CharacterInterface {
  id: number
  name: string
  job: string

  constructor(id: number, name: string, job: string) {
    this.id = id
    this.name = name
    this.job = job
  }

  introduce () {
    return `Hi, I'm ${this.name}.`
  }
}


// How to extend a class: These are called 'subclasses'.
class Magician extends Character {
  affiliation: string

  constructor(id: number, name: string, job: string, affiliation: string) {
    super (id, name, job) // When extending a class, 'this.property' is not necessary. 
    this.affiliation = affiliation
  }
}

const magician = new Magician (5, 'Ron', 'wizard', 'Hogwarts')
console.log(magician.introduce())
// => Note that the introduce() method is from Character class not the Magician class.


// Generics: used to build re-usable components.
function getArray (items: any[]): any[] {
  return new Array().concat(items)
}

/*
Let's assume we want to have functions that return two different types of arrays:
One to be an array of numbers and the other to be an array of strings.
*/

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(['hello', 'from', 'the', 'other', 'side'])

numArray.push('hello') // <-- This does not throw an error.
// To make sure we just want pure num array and str array, we can use generics.
// <T> <-- generic. placeholder of a type.
function getArray2<T> (items: T[]): T[] {
  return new Array().concat(items)
}

let numArray2 = getArray2<number>([1, 2, 3, 4])
let strArray2 = getArray2<string>(['hello', 'from', 'the', 'other', 'side'])
// numArray2.push('hello') <-- This throws an error!
