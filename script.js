// Create the student object with a method
const student = {
  name: "John Doe",
  age: 20,
  grade: "A",
  getKeys: function () {
    return Object.keys(this);
  }
};

// Test the method
console.log(student.getKeys()); // Output: ["name", "age", "grade", "getKeys"]
