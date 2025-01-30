const student = {
  name: "John Doe",
  age: 20,
  grade: "A"
};

// Function to get all keys of an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Test the function
console.log(getKeys(student));