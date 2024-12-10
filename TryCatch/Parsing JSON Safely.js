// Parsing JSON Safely

// Write a function safeParseJSON(jsonString) that takes 
// a JSON string as input and uses try...catch to handle
// errors when the string is invalid JSON. If parsing fails,
// return an empty object {}.

// Example Input:
// safeParseJSON('invalid-json')
// Expected Output:
// {}

safeParseJSON = (jsonString) =>{
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log("Error : "+ error.message);
        return {};
    }
}
safeParseJSON('invalid-json');
// safeParseJSON('{"name":"Jason","age":10}');