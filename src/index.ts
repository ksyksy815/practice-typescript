/* NOTES
* Type inference

터미널 코맨드
tsc -- init
=> "tsconfig.json"이름을 가진 타입스크립트 설정 파일을 만듬

*/

let id: number = 5
let company: string = 'Hello Seo'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

// 요소의 타입이 모두 숫자인 배열
let ids: number[] = [1, 2, 3, 4, 5]
/* 예시: 
ids.push('Hello')
=> ids 요소는 모두 숫자만으로 설정되었기 때문에 에러 발생
*/

// 배열에 어떤 타입이 들어갈지 아직 모를 때
let arr: any = []

// Tuple (튜플)
let person: [number, string, boolean] = [1, 'String', true]
/* 예시:
let person: [number, string, boolean] = [1, 'String', 'I'm not boolean']
=> 에러 발생
*/

// Tuple Array 튜플 배열
let employee: [number, string][]
employee = [
  [1, 'String 1'],
  [2, 'String 2'],
  [3, 'String 3'],
]
/* 예시:
employee = [
  [1, 'String 1'],
  [2, 'String 2'],
  ['Three', 'String 3'],
]
=> 에러
*/

// Union (유니언): 변수에 두 개 이상의 타입을 허용하고 싶을 때
let order: string | number = 22
order = '22'

// Enums (이넘. numerated types): 숫자 또는 문자열인 네임드 변수의 세트를 정의할 때 사용.
// allows to define a set of named constants either numeric or string.
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

/* 예시 (숫자로 지정된 경우)
console.log(Direction1.Up) <-- 1
console.log(Direction1.Left) <-- 3
*/

// 문자열로 지정도 가능 (Also possible to set them as strings)
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

/*
console.log(Direction2.Left) <-- 'Left'
*/

// Objects 객체
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

// Type Assertion이란?
// 컴파일러에게 직접적으로 나 요런 타입으로 하고 싶다라고 말하는 것
// = explicitly telling the compiler that we want to treat an entity with different types.
let cid: any = 1

// 다른 변수에 기반하여 또 다른 변수를 만들고 싶을 때 (When you want to create a value based on another value.)
// 방법은 두가지가 있음: (1) <number> 또는 (2) as number
let customerId1 = <number>cid
// customerId1 = true <-- Error. 

let customerId2 = cid as number

// Functions 함수
// 매개변수의 타입을 지정하지 않을 경우, 타입스크립트 설정 파일에서 "noImplicitAny" 옵션이 활성화되어 있지 않은 이상 에러가 생길 것임.
// (Not specifying types of parameters will throw an error unless the "noImplicitAny" option in the config file is abled.)

/* 매개변수 타입이 지정되지 않은 함수 예시 (Example of a function with no types for parameters):
function addNum(x, y) {
  return x + y
}
*/

// 함수: 리턴값이 있을 때when there is a return value
function addNum (x: number, y: number): number {
  return x + y
}

// : 리턴값이 없을 때 (: void 추가)
function log (message: string | number): void {
  console.log(message)
}


// Interfaces 인터페이스
// 객체나 함수의 특정한 구조를 설정하는 것 (Custom type, specific structure to an object or function.)
// 커스터마이징된 객체 타입이라고 생각하면 됨 (Very similar to the custom type for an object.)

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
=>  type은 원시데이터나 유니언과 함께 사용될 수 있지만, 인터페이스는 안됨
(A type can be used with primitives and unions, whereas an interface cannot.)
ex) type Point = number | string
const p1: Point = 1
*/

/* Optional property
프로퍼티 옆에 물음표 ?를 붙이면 있어도 되고 없어도 되는 프로퍼티가 됨.
(Putting a question mark next to a property means that particular property is optional.)
ex) age?: number
*/

/* 수정 불가능한 리드온리 프로퍼티로도 만들 수 있음 (Making a property readonly)
ex) readonly id: number
user1.id = 5 <-- error
*/

// 함수와 함께 인터페이스 사용해보기
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
// const add: MathFunc = (x: number, y: string): number => x + y
// => 에러 발생. string 타입이 MathFunc 타입에 할당될 수 없기 때문에 발생!

const subtract: MathFunc = (x: number, y: number): number => x - y



// Classes 클래스
// 클래스와 함게 인터페이스 적용해보기
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

// Methods in class`
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
