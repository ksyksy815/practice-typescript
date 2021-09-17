"use strict";
let id = 5;
let company = 'Hello Seo';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [];
let person = [1, 'String', true];
let employee;
employee = [
    [1, 'String 1'],
    [2, 'String 2'],
    [3, 'String 3'],
];
let order = 22;
order = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId1 = cid;
let customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const john = new Person(0815, 'John');
const jane = new Person(0803, 'Jane');
class Character {
    constructor(id, name, job) {
        this.id = id;
        this.name = name;
        this.job = job;
    }
    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
}
const harry = new Character(1, 'Harry', 'wizard');
console.log(harry.introduce());
class Character2 {
    constructor(id, name, job) {
        this.id = id;
        this.name = name;
        this.job = job;
    }
    introduce() {
        return `Hi, I'm ${this.name}.`;
    }
}
class Magician extends Character {
    constructor(id, name, job, affiliation) {
        super(id, name, job);
        this.affiliation = affiliation;
    }
}
const magician = new Magician(5, 'Ron', 'wizard', 'Hogwarts');
console.log(magician.introduce());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['hello', 'from', 'the', 'other', 'side']);
numArray.push('hello');
function getArray2(items) {
    return new Array().concat(items);
}
let numArray2 = getArray2([1, 2, 3, 4]);
let strArray2 = getArray2(['hello', 'from', 'the', 'other', 'side']);
