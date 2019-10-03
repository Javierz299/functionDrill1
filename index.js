'use strict';

function yearOfBirth(age){
  if(age < 0){
    throw new Error('Age can not be negative');
  }

  return 2019 - age;
}

function createGreeting(name,age){
  
  return `Hi, my ${name} is Chris and I'm ${age} years old`;
}



try {
  const greeting1 = createGreeting('Chris',29);
  console.log(greeting1);
} catch(e) {
  console.error(e.message);
}