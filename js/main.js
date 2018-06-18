/***** Primitive Types *****/

/*// strings
var string1 = "I am a string";
var string2 = 'I am another string';

// numbers
var num = 0;
var num1 = 1;
var num2 = 45;
var num3 = -32;
var num4 = 3.14;

var num5 = '1000'; //caution -- this is actually a string!

// boolean
var bool1 = true;
var bool2 = false;

// null
var nullVar = null;

// undefined
var undefinedVar1 = undefined;
var undefinedVar2; //undefined by default.  lines 24 and 25 are the exact same!

/***** Complex Types or Object Types *****/
// arrays
/*var myArray = [1, 2, 3];

var shoppingList = ['milk', 'ice cream', 'flour'];
//                    0         1           2

var shoppingList2 = [
  'milk',
  'ice cream',
  'flour'
];

var listOfThings = [
  'strings are an acceptable type',
  function mySpecialFunction() {
    console.log('hello ');
  },
  365,
  {
    key: 'Richard'
  },
  true,
  [1, 'two', 3333333],
  null,
  undefined,
];

// objects
var myObject = {
  key: 'value' //the value can be any of the primitives
}

var family = {
  dad: 'Rick',
  mom: 'Barbara',
  age: 42,
  isJavaScriptAwesome: true,
  brother: 'Jonathan',
  nephew: 'Jack'
};

var AdvWeb2 = {
  instructor: {
    fullName: "Richard Kalehoff"
  },
  name: "Advanced Web 2",
  numberOfStudents: 4,
  students: [
    {name: "Allison", ufID: 112233, grades: [2, 1, 3]},
    {name: "Jack", ufID: 445566, grades: [5, 4, 6]},
    {name: "James", ufID: 778899, grades: [8, 7, 9]},
    {name: "Barbara", ufID: 000000, grades: [1, 1, 94]},
  ],
  toString: function() {
    return AdvWeb2.numberOfStudents;
  }
};

//functions
var myFunction = function() {
  console.log( 'I am a function!' );
}

// identifiers
var ABCabc = 'hello';
var abcABC = 'there';
var _howdy = 123;
var $testing = [1, 2, 3];*/

/**********End of Notes with Richard**********/

/**********Start of Assignment 4**********/

//step 4
var iceCream = ['Mint Chocolate Chip', 'Pistachio', 'Strawberry'];

iceCream.push('Cookie Dough');

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
