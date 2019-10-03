'use strict';

function yearOfBirth(age){
  
  return 2019 - age;
}

function createGreeting(name,age){
  
  return `Hi, my ${name} is Chris and I'm ${age} years old`;
}

const greeting1 = createGreeting();
console.log(greeting1);