/**********Start of Assignment 4**********/

//step 4
var iceCream = ['Mint Chocolate Chip', 'Pistachio', 'Strawberry'];

iceCream.push('Cookie Dough');
iceCream.length === 4;

//step 5
var presidents;
presidents = [
  presidentInfo = {
    firstName: 'Donald',
    lastName: 'Trump',
    termLength: 1,
    party: 'Republican',
    yearsOfPresidency: '2017-present'
  },

  presidentInfo1 = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: '2009-2017'
  },

  presidentInfo2 = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: '2001-2009'
  },

  presidentInfo3 = {
    firstName: 'William',
    lastName: 'Clinton',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: '1993-2001'
  },

  presidentInfo4 = {
    firstName: 'George H. W.',
    lastName: 'Bush',
    termLength: 1,
    party: 'Republican',
    yearsOfPresidency: '1989-1993'
  }
];

var presidents = [presidentInfo, presidentInfo1, presidentInfo2, presidentInfo3, presidentInfo4];

console.log(presidents[2]. firstName + '' + presidents[2]. lastName);

//step 6

function howdy( person, message ) {
    return person + ' says ' + message;
}

var message = howdy( 'Janetta Boone', 'hello Caitlyn!' );
console.log( message );

//6b

var numba = function(string) {
  if (string.length < 7) {
    return('What a tiny little word!');
  } else if (string.length > 7) {
    return("I'm sorry, but that is too many to count");
  } else if (string.length === 7) {
    return('7, what a perfect choice!');
  }
}

console.log(numba('7'));
console.log(numba('seventy'));
console.log(numba('university'));

//6c

function inception (display, faveMovie) {
  console.log(faveMovie + ' ' + 'is a fantastic movie.')
}

inception ('show', 'Age of Adeline');
function display(faveMovie) {
};
