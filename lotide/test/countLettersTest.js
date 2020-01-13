//Imported Function
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

//Global
const result = (countLetters("lighthouse in the house"));

//Code Test
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
