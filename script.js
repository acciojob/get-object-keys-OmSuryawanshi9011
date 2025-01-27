// Create a JavaScript object called student
const student = {
  name: "John Doe"
};

// Function to get all keys from an object
function getKeys(obj) {
  // Return an array of all the keys in the object
  return Object.keys(obj);
}

// Test the function
const keys = getKeys(student);
console.log(keys); // Expected output: ["name"]
