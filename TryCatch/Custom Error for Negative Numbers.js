// Custom Error for Negative Numbers

// Write a function calculateSquareRoot(number) 
// that throws an error if the input is a negative number. 
// Use a try...catch block to handle the error and display
// an appropriate message.

// Example Input:
// calculateSquareRoot(-9)
// Expected Output:
// Error: Cannot calculate square root of a negative number.

calculateSquareRoot = (number) =>{
    try {
        if (number<0) throw new Error("Cannot calculate square root of a negative number.");
        console.log("Root of "+number+" = "+Math.sqrt(number));
    } catch (error) {
        console.log("Error: ",error.message);
    }
}

calculateSquareRoot(-9);