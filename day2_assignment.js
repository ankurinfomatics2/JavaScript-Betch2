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

console.log("Question-1 output \n****************************\n");
console.log("Your string is: " + String);
console.log("Your charcter is: " + inputChar);
if (count==0)
    console.log("Character is not found in the string.");
else
    console.log("Occurence of character "+inputChar+" is: " +count);
console.log("\n****************************\n\n\n\n");

        // Input:
        //     Enter your string: hello
        //     Enter the character: l

        // Output:
        //      Question-1 output: 
        //      ****************************
        //      Your string is: hello
        //      Your charcter is: l
        //      Occurence of character l is: 2
        //
        //      ****************************

// ******************************************************************




// ******************************************************************

// Question 2:
// Program to convert minutes to seconds

var minutes = window.prompt("Enter minutes(as integer number): ");
console.log("Question-2 output: \n****************************\n");
console.log(minutes+" minutes converts into the "+minutes*60+" seconds");
console.log("\n****************************\n\n\n\n");

        // Input:
        //        Enter minutes(as integer number): 5
        // Output:
        //        Question-2 output: 
        //        ****************************
        //        5 minutes converts into the 300 seconds
        //         
        //        ****************************

// ******************************************************************



// ******************************************************************

// Question 3:
// Program to search for a element in a array of strings
let arr = ["Laptop", "keyboard", "mouse","monitor"];
var serVal = window.prompt("Enter the item to search in array: ");
var Count = 0
for (var i=0; i<arr.length; i++){
    if (arr[i]==serVal){
        Count = i;
    }

}
console.log("Question-3 output: \n****************************\n");
console.log("array values are: "+arr);
if (Count==0){
    let a = `The ${serVal} is not in array.`
    console.log(a);
}
else{
    let b = `The ${serVal} value is at the ${Count+1} position`
    console.log(b);
}
console.log("\n****************************\n\n\n\n");


        // Input:
        //        Enter the item to search in array: keyboard
        // Output:
        //        Question-3 output: 
        //        ****************************
        //        array values are: Laptop,keyboard,mouse,monitor
        //        The keyboard value is at the 2 position
        //         
        //        ****************************

// ******************************************************************



// ******************************************************************

// Question 4:
// Program to display only elements containing 'a' in them from a array
let arr2 = ["Laptop", "keyboard", "mouse","monitor", "pencil"]
let arrCount = []
let charVal = "a"

for (var i=0; i<arr2.length; i++){
    for (var j=0; j<arr2[i].length; j++){
        if(arr2[i][j]==charVal){
            arrCount.push(arr2[i]);
            continue;
        }
    }
}
console.log("Question-4 output: \n****************************\n");
console.log("array values are: "+arr2);
if(arrCount.length != 0){
    console.log("Following elements of the array have 'a' in the array: " +arrCount);
    
}
else{
    console.log("Array doesn't have any element containing 'a' in it.");
}
console.log("\n****************************\n\n\n\n");

        // Input:
        //        N/A
        // Output:
        //        Question-4 output: 
        //        ****************************
        //        array values are: Laptop,keyboard,mouse,monitor,pencil
        //        Following elements of the array have 'a' in the array: Laptop,keyboard,pancil
        //         
        //        ****************************

// ******************************************************************




// ******************************************************************
// Question 5:
// print an array in reverse order
let arr3 = ["Laptop", "keyboard", "mouse","monitor", "pencil"]
let revArray = []
for (var i=arr3.length; i>=0; i--){
    revArray.push(arr3[i]);
}
console.log("Question-5 output: \n****************************\n");
console.log("Orginal array is: "+arr3);
console.log("Reverse array is: "+revArray);
console.log("\n****************************\n");

        // Input:
        //        N/A
        // Output:
        //        Question-5 output: 
        //        ****************************
        //        array values are: Laptop,keyboard,mouse,monitor,pencil
        //        Reverse array is: ,pencil,monitor,mouse,keyboard,Laptop
        //         
        //        ****************************

// ******************************************************************


