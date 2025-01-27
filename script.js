let student = {
  name: "John"
};

function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys(student)); // ["name"]