// Nested Try-Catch Blocks

// Write a program with nested try...catch blocks.
// The inner block should throw an error, 
// and the outer block should catch it and log a different message.

// Expected Output:
// Error caught in inner block: <message>
// Error caught in outer block: <message>
try {
    try {
        throw new Error("Inner try error");
    } catch (error) {
        console.log("Error caught in inner block:",error.message);
        throw new Error("Outer try error");
        
    }
} catch (error) {
    console.log("Error caught in outer block:",error.message);    
}