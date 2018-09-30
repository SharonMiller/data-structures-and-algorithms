'use strict';

const Stack = require('./stack.js');

let multiBracketValidation = (inputString) => {
  let brackets = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  let openedBrackets = Object.values(brackets);
  let closedBrackets = Object.keys(brackets);

  let bracketStack = new Stack;

  if (!inputString.length) {
    return true;
  }

  for (let character of inputString){
    //checks to see if the char from opened is the bracket pair
    if (openedBrackets.includes(character)) {
      //if it is an open bracket then push it to the stack
      bracketStack.push(character);

    } 
    //check to see if next character is a closed bracket
    if (closedBrackets.includes(character)){
      //peek to see if the character matches
      if (brackets[character] === bracketStack.peek()) {
        //if it matches then remove the matched character from the stack
        bracketStack.pop();
      } else {
        return false;
      }
    }
  }
  return !bracketStack.size;
};


module.exports = multiBracketValidation;