//Solve the following string/math/number/function/array-related problems. Each solution should be 
//written within its own function and the output should be displayed within a console window. The display
//should be the return value of the function call.
//---------
//STEP 1
// Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume 
// punctuation and number symbols are not included in the passed-in string. 
// Example string: 'webmaster'                Expected Output: 'abeemrstw'

// function alphabetical_Order(string) {
//     return string.split('').sort().join('');
// };
// word = "labyrinth";
// console.log(alphabetical_Order(word));


//STEP 2
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
// word of the string to upper case.
// Example string: 'the quick brown fox'      Expected Output: 'The Quick Brown Fox'

// function first_Letter_UpperCase(upperCaseWord) {
//     let words = upperCaseWord.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         word = word[0].toUpperCase() + word.slice(1);
//         words[i] = word;
//     }
// return words.join(' ');
// };
// string = "Curiosity killed the cat";
// console.log(first_Letter_UpperCase(string));

//STEP 3
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels
// within the string.     Example string: 'The quick brown fox'            Expected Output: 5 

// function total_Vowels(totVowels) {
// return totVowels.match(/[A|E|I|O|U|a|e|i|o|u]/g).length;
// };
// let word = 'Icing on the cake';
// console.log(total_Vowels(word));


//STEP 4
// Write a JavaScript function that generates a string id (specified length) of random characters.
// Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

// function random_Characters(randomchar) {
//     let random = "";
//     for( var i = 0; i < 8; i++ ){
//         random += String.fromCharCode(33 + Math.random() * 93);
//     }
//     return random;
// };
// console.log(random_Characters());


//STEP 5
// Write a JavaScript function that accepts a list of country names as input and returns the longest 
// country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

// function longest_Country(longest) {
//     var long = 0;
//     var longest;

//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].length > long) {
//            long = countries[i].length;
//            longest = countries[i];
//         }
//     }
// return longest;
// };
// let countries = [
//     "Australia", 
//     "Germany", 
//     "United Kingdom of Great Britain",
//     "United States of America"
// ];
// console.log(longest_Country(countries));