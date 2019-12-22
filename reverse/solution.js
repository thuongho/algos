// const greeting = 'hello my name is Sam';
const reverse = (str) => {
  if (!str) {
    return;
  }
  // reverse var to hold the reverse string
  let reversed = '';
  // take a string, split it into an array of each char
  const arr = str.split('');
  // while the array has a length, pop the items and add it to the reverse string
  while (arr.length) {
    reversed += arr.pop();
  };
  // return the reversed
  return reversed;
};
// O(n) - Time O(n) - space

const reverse2 = (str) => str.split('').reverse().join('');

const reverse3 = (str) => [...str].reverse().join('');

const greeting = 'hello my name is Sam';
reverse2(greeting);
// reverseStr(null);
// reverseStr();
// reverseStr(undefined);
