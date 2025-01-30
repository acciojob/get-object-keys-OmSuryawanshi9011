// Create a JavaScript object called student
const student = {
  name: "John Doe"
};

// Define getKeys as a standalone function that accepts an object
function getKeys(obj) {
  return Object.keys(obj); // Return the keys of the passed object
}

console.log(getKeys(student)); // Expected output: ["name"]
