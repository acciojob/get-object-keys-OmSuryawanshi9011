// Create a JavaScript object called student
const student = {
  name: "John Doe",
  
  // Define getKeys as a method of the student object
  getKeys: function () {
    return Object.keys(this); // Use 'this' to refer to the current object
  }
};

// Test the method
const keys = student.getKeys();
console.log(keys); // Expected output: ["name", "getKeys"]
