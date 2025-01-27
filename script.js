// Create a JavaScript object called student
const student = {
  name: "John Doe",
	age: "21",
	city: "Nashik"
};

// Define getKeys as a standalone function that accepts an object
function getKeys(obj) {
  return Object.keys(obj); // Return the keys of the passed object
}

// Test the function by passing the student object to it
const keys = getKeys(student);
console.log(keys); // Expected output: ["name"]
