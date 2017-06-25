function add(a, b){
    return a+b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd)); //spreads them as individual arguement

var groupA = ['Jim', 'Tom'];
var groupB = ['Vikram'];
var final = [3, ...groupA];

console.log(final);

function greet(name, age){
    console.log('Hi!..' + name + " Your age is " + age);
}

var person = ['Arjun', 23];

greet(...person);