//STEP 1
//Create an application that prompts the user for their name. Then, find the length of characters in the 
//person’s name. Use the alert method to display the result.

// let userName   = prompt("Enter your name");
// let wordLenght = userName.length;
// alert(userName + ", the length of your name is: " + wordLenght);


//STEP 2
//Create an application that prompts the user for their name. Then, prompt the user for a numeric 
//value so that they can find the letter in the string based on the number they specify. Use the alert
//method to display the result.

// let userName     = prompt("Enter your name");
// let userNumber   = parseInt (prompt("Enter a number base in the length of your name"));
// let end          = (userNumber + 1);
// let yourLetter   = userName.slice(userNumber, end);
// alert("The letter in the string base in the number that you gave me is:  " + yourLetter);


//STEP 3
//Create an application that prompts the user for their first name. Then, prompt the user for their last 
//name using a second prompt. Use the alert method to display the text "Your name is: " along with 
//the result of the first name and last name concatenated together. You will use a concatenation
//operator to concatenate the literal string with the result of the String object method’s result.

// let userFirstName   = prompt("Enter your first name");
// let userLastName   = prompt("Enter your last name");
// alert("Your contact name is: " + userFirstName.concat(userLastName));


//STEP 4
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a 
//variable. Then, find and display within an alert the index of the word “fox”.

// let text = "The quick brown fox jumps over the lazy dog";
// alert("The index of the word 'fox' is: " + text.indexOf("fox"));


//STEP 5
//Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a 
//variable. Then, find and display within an alert the index of the last instance of the word “fox”.

// let text = "The quick brown fox jumps over the lazy fox";
// alert("The index of the last instance of the word 'fox' is: " + text.lastIndexOf("fox"));


//STEP 6
//Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a
//variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the
//variable with the name that the user enters within the prompt. Use the alert method to display the 
//result.

// let text     = "The quick brown fox jumps over the lazy dog";
// let fullName = prompt("Enter your full name");
// alert(text.replace('the lazy dog', fullName));


//STEP 7
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a 
//variable. Then, prompt the user for a word. Next, search for the word within the string that the user 
//enters into the prompt. Use the alert method to display the result.

// let text = "The quick brown fox jumps over the lazy dog";
// let word = prompt("Enter your word");
// alert(text.match(word));


//STEP 8
//Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a 
//variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy
//dog” from the old_string variable and store that result in a second variable called new_string. Use 
//the alert method to display the uppercase result of new_string.

// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(30);
// alert("The new string is: " + new_string);


//STEP 9
//Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY
//DOG          ” within a variable. Make sure to add space before and after the text so that appears very
//similar to the text here. Use the alert method to display the lowercase result of the variable once the
//space has been trimmed off.

// let text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG               ";
// let textTrim = text.trim();
// alert(textTrim.toLowerCase());

//STEP 10
//Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a 
//variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically 
//capitalize the first letter in the sentence and display the result in an alert.

let text = "the quick brown fox jumps over the lazy dog";
alert(text.toUpperCase()[0] + text.slice(1));
