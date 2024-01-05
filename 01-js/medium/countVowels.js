/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // let vowels_count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (
  //     str[i] == "a" ||
  //     str[i] == "e" ||
  //     str[i] == "i" ||
  //     str[i] == "o" ||
  //     str[i] == "u" ||`
  //     str[i] == "A" ||
  //     str[i] == "E" ||
  //     str[i] == "I" ||
  //     str[i] == "O" ||
  //     str[i] == "U"
  //   )
  //     vowels_count++;
  // }
  // return vowels_count;
  //
  // let vowels_count = 0;
  // vowels_count = str.match(/[aeiou]/gi).length;
  // return vowels_count;
  let vowels_count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let item of str.toLowerCase()) {
    if (vowels.includes(item)) vowels_count++;
  }
  return vowels_count;
}

module.exports = countVowels;
