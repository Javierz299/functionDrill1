'use strict';

function createGreeting(name,age){
  const yearOfBirth = 2019 - age;
  return `Hi, my ${name} is Chris and I'm ${age} years old`;
}

const greeting1 = createGreeting();
console.log(greeting1);