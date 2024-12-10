//     Catch Undefined Variable Error

//     Write a program that attempts to log the value 
//     of an undefined variable and catches the error 
//     using a try...catch block.

//     Example Input:
//     (No input; simulate an error)
//     Expected Output:
//     Error caught: <error message></error>

try {
    console.log(variable);
    
} catch (error) {
    console.log("Error caught : "+ error.message);
}