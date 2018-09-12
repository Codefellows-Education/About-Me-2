'use strict';

//first question
var middle = prompt('Is my middle name Jane?');

if (middle.toLowerCase()==="yes" || middle.toLowerCase()==="y") {
  alert('nope - not even close');
} else {
  alert('Correct! My middle name is Elizabeth');
}

console.log('is my middle name Jane? ' + middle);

//second question
var cats = prompt('Do I love Cats?');

if (cats.toLowerCase()==="yes" || cats.toLowerCase()==="y") {
  alert ('Of course I do! Who doesn\'t love those furry little muffins?');
} else {
  alert('WRONG! Cats are amazing! What were you thinking?');
}

console.log('Do I love cats? ' + cats);

//third question
var travel = prompt('Have I ever been out of the cournty?');

if (travel.toLowerCase()==="yes" || travel.toLowerCase()==="y") {
  alert ('Correct! I\ve alctually travelled all around the world - most recently to Africa');
} else {
  alert('WRONG!');
}

console.log('Have I ever been out of the country? ' + travel);

//fourth questioh
var kids = prompt('Do I have kids?');

if(kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n'){
  alert('Technically you are correct. I one ONE kid - although she is loud enough for four kids!');
} else {
  alert('Ha! Trick question! I only have ONE kid - although if you met her, you\'d think you were around 10 kids!');
}

console.log('Do I have kids? ' + kids);

//fifth question
var sing = prompt('Do I sing karaoke?');

if(sing.toLowerCase() === 'no' || sing.toLowerCase() === 'n'){
  alert('Right you are! No one wants to hear me sing, trust me.');
} else {
  alert('WRONG! No matter how drunk you get me, I will never get on that stage.');
}

console.log('Do I sing? ' + sing);

