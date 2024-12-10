// Validating Form Input

// Write a function validateInput(input) that 
// checks if the input is a non-empty string. 
// If not, throw an error. Use try...catch to log
// appropriate error messages.

// Example Input:
// validateInput('')
// Expected Output:
// Error: Input cannot be empty.

validateInput = (input) => {
    try {
        if ( input === "" || input === undefined ) throw new Error("Input cannot be empty.");
        console.log(input);
    } catch (error) {
        console.log("Error:",error.message);
    }
}

validateInput()