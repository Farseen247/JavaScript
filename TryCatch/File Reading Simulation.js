// File Reading Simulation

// Simulate a file-reading operation by writing a 
// function readFile(fileName) that throws an error 
// if the file name is not provided. Use try...catch 
// to handle the error.

// Example Input:
// readFile()
// Expected Output:
// Error: File name is required.

readFile = (fileName) =>{
    try {
        if (!fileName) throw new Error("Filename Required");
        console.log(`Reading File: ${fileName}`);
    } catch (error) {
        console.log("Error:",error.message);
    }
}
readFile();
// readFile("example.txt");