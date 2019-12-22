//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// mention naive with double nested loops O(n^2)
// hash table method is faster but it has O(n) space complexity
function firstRecurringCharacter(input) {
  // check input
  if (!input) {
    return undefined;
  }
  // library to keep track of numbers
  const library = {};
  // loop through the array
  // readability use for of since I don't need index
  for (let number of input) {
  // check the library
  // if not found, save to library
    if (!library[number]) {
      library[number] = true;
    } else {
      // if found return found number
      return number;
    }
  }
  // return undefined if nothing
  return undefined;
} //O(n) Time and Space

const array1 = [2,5,1,2,3,5,1,2,4];
//It should return 2

const array2 = [2,1,1,2,3,5,1,2,4];
//It should return 1
//Bonus... What if we had this:
const array3 = [2,5,5,2,3,5,1,2,4];
// return 5 because the pairs are before 2,2

// firstRecurringCharacter(array1);
// firstRecurringCharacter(array2);
// firstRecurringCharacter(array3);
// firstRecurringCharacter();
// firstRecurringCharacter(null);
// firstRecurringCharacter(undefined);
// firstRecurringCharacter([]);
// firstRecurringCharacter([0, 0, 0]);