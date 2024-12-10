// Simple Division with Error Handling

// Write a function divideNumbers(a, b) that divides two numbers. 
// Use a try...catch block to handle the case where b is zero and
//  throw an appropriate error message.

// Example Input:
// divideNumbers(10, 0)
// Expected Output:
// Error: Cannot divide by zero.


divideNumbers = (a, b) =>{
    try {
            if ( b == 0) throw new Error("Cannot divide by zero")
            console.log(a + " / " + b + " = " + a/b);
        }
    catch (error) {
        console.log("Error caught : "+ error.message);
    }
}

divideNumbers(10,0);