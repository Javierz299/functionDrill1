'use strict';

function yearOfBirth(age){
  if(age < 0){
    throw new Error('Age can not be negative');
  }

  return 2019 - age;
}

function createGreeting(name,age){
  if(typeof name !== 'string' || typeof age !== 'number'){
    throw new TypeError('Arguments not valid');
  }
  
  return `Hi, my ${name} is Chris and I'm ${age} years old`;
}


try {
  const greeting1 = createGreeting('Chris',29);
  console.log(greeting1);
} catch(e) {
  console.error(e.message);
}
////////////////////bottom half complete/////////////////////////////
'use strict';

function getYearOfBirth(age) {
  if(age < 0){
    throw new Error ('Age can not be negative');
  }


  return 2019 - age;
}

function createGreeting (name, age){
  const yearOfBirth = getYearOfBirth(age);
  if (name === undefined || age === undefined) {
    throw new Error ('Arguments not valid');
    // typeof age !== isNan
  } if(typeof name !== 'string' ||  typeof age !== 'number'){
    throw new TypeError('name must be a string and age must be a number');
  }
  return `Hi, my name is ${name} and I'm  ${age} years old. I was born in ${yearOfBirth}`;
  
}


try {
  const greeting1 = createGreeting('chris',29);
  console.log(greeting1);
} catch(e){
  console.log(e.message);
}
