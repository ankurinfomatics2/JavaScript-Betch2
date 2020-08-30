// ******************************************************************
// Question 1:
// Program to search for a particular character in a string

var String = window.prompt("Enter your string: ");
var inputChar = window.prompt("Enter the character: ");


let count = 0;

for (let i=0; i < String.length; i++){
    if (String[i] == inputChar){
        count++;
    }
        
}

console.log("Question-1 begins \n****************************\n");
console.log("Your string is: " + String);
console.log("Your charcter is: " + inputChar);
if (count==0)
    console.log("Character is not found in the string.");
else
    console.log("Occurence of character "+inputChar+" is: " +count);
console.log("Question-1 ends \n****************************\n\n\n\n");

        // INPUT:
        //     Enter your string: hello
        //     Enter the character: l

        // Output:
        //      Question-1 begins 
        //      ****************************
        //      Your string is: hello
        //      Your charcter is: l
        //      Occurence of character l is: 2
        //      Question-1 ends 
        //      ****************************

// ******************************************************************




// ******************************************************************

// Question 2:
// Program to convert minutes to seconds

var minutes = window.prompt("Enter minutes(as integer number): ");
console.log("Question-2 begins \n****************************\n");
console.log(minutes+" minutes converts into the "+minutes*60+" seconds");
console.log("Question-2 ends \n****************************\n\n\n\n");

        // Input
        //        Enter minutes(as integer number): 5
        // Output
        //        Question-2 begins 
        //        ****************************
        //        5 minutes converts into the 300 seconds
        //        Question-2 ends 
        //        ****************************

// ******************************************************************



// ******************************************************************

// Question 3:
// Program to search for a element in a array of strings

// ******************************************************************



// ******************************************************************

// Question 4:
// Program to display only elements containing 'a' in them from a array

// ******************************************************************




// ******************************************************************

// Question 5:
// print an array in reverse order

// ******************************************************************


