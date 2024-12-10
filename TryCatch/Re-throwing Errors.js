// Re-throwing Errors

// Write a function fetchData() that simulates an 
// API call by throwing an error. Use a try...catch
// block to handle the error, log a message, and re-throw
// the error for further handling.

// Example Input:
// (No input; simulate error)
// Expected Output:
// Error caught: API Error occurred
// Error re-thrown: API Error occurred

fetchData = () =>{
    try {
        console.log("Fetching data....");
        throw new Error("API Error occurred");
    } catch (error) {
        console.log("Error caught:",error.message);
        throw error;
    }
}

try{
    fetchData();
}catch(error){
    console.log("Error re-thrown:",error.message);    
}

