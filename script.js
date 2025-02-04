// Create a student object with a property called name
const student = {
  name: "John Doe"
};

// Function to get all keys from an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Test 1: Object with multiple properties
const testObject1 = {
  name: "Alice",
  age: 25,
  city: "New York"
};
console.log(getKeys(testObject1)); // Expected output: ["name", "age", "city"]

// Test 2: Object with only one property
const testObject2 = {
  name: "Bob"
};
console.log(getKeys(testObject2)); // Expected output: ["name"]
