// Points covered: stack memory, heap memory, shallow copy, serialization and de-serialization of JSON

// ---------------------------------------------------------------------------------------
// String is a Primitive datatype, which stores in Stack memory
let str_p1 = "Zakir";

let str_p2 = str_p1;

// any change in str_p1 will not reflect in str_p2
str_p1 = "Khan sahab";

console.log(`str_p2 is ${str_p2}`);
console.log(`str_p1 is ${str_p1}`);

// ---------------------------------------------------------------------------------------
// Object is a non-primitive datatype, which stores in heap memory and its address stores in stack memory
let obj_p1 = {
  fname: "Zakir",
  lname: "Khan",
};

let obj_p2 = obj_p1;

// any changes in obj_p2 will reflect in obj_p1 also, as they are pointing to same memory address in heap
obj_p2.lname = "Indore ka ladka";

// JSON.stringify() = converts object into String i.e. Serialization of JSON
console.log(`Value of obj_p2 : ${JSON.stringify(obj_p2)}`);

console.log(`Value of obj_p1 : ${JSON.stringify(obj_p1)}`);

// ---------------------------------------------------------------------------------------
// Shallow copy of object, i.e. nested data will not make a copy but will use reference data
let person1 = {
    first_name: "Hitesh",
    last_name: "Choudhary",
    knownLanguages: ["Python", "Javacript", "C++"],
    occupation: function () {
        console.log("Runs ChaiCode and 1 english YT channel");
    },
    total_subscribers: {
        ChaiCode: "611 K",
        Hitesh_Choudhary: "988 K",
    }
};

// creating Shallow copy using spread operator
let person2 = {
  ...person1,
  ...person1.total_subscribers
};

person2.first_name = "Piyush";

// any change in nested data (here incase it's array) of shallow copy will change the original data
person2.knownLanguages[3] = "Rust";
person2.total_subscribers.ChaiCode = "1 million"
console.log("this is person 2", person2);
console.log("this is person 1", person1);

// ---------------------------------------------------------------------------------------
// Deep copy of object
let person3 = {
    name: "Peter Parker",
    otherIdentity : "Spider-man",
    friends : ["Iron-spider", "Doctor Strange", "Ironman"]
}

// using Serilization : converting object into string
let person3_string = JSON.stringify(person3)
console.log("this is string output of person 3" , person3_string);

// using De-serilization : converting string into object
let person4 = JSON.parse(person3_string)
console.log("this is object output of peron 4 (before modification)" , person4)

person4.friends[0] = "Spider Gwen"
console.log("this is object output of peron 4 (after modification)" , person4)