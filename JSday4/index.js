//const name = ["amrit", "anurag", "nepal"];

// name.forEach((value) => {
//     return value + "amrit";
//     console.log(value);
//   });
//   console.log(name);
  
//   // arrayname.foreach((value) => {
//   // statement
//   const student = ["sujata", "amrit", "sagar", "anurag", "umesh", "pragyan"];
//   const newstudent = student.map((newname) => {
//     return newname + "amrit";
//   });
//   // return new element with array
//   console.log(newstudent);
  
  
const fruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "blueberry",
    "pineapple",
    "watermelon",
    "kiwi",
    "mango",
    "peach",
    "pear",
    "plum",
    "cherry",
    "apricot",
    "pomegranate",
    "fig",
    "coconut",
    "nectarine",
    "raspberry",
    "blackberry",
    "cantaloupe",
    "honeydew",
    "grapefruit",
    "lemon",
    "lime",
    "tangerine",
    "papaya",
    "passion fruit",
    "dragonfruit",
    "guava",
    "lychee",
    "persimmon",
    "starfruit",
    "aplle",
    "orange",
    "lemon",
    "lime",
    "banana",
    "mango",
    "pineapple",
    "kiwi",
    "grape",
    "strawberry",
    "blueberry",
    "raspberry",
    "blackberry",
    "apricot",
    "peach",
    "nectarine",
    "plum",
    "cherry",
    "watermelon",
    "cantaloupe",
    "honeydew",
    "pomegranate",
    "fig",
    "papaya",
    "passion fruit",
    "dragonfruit",
    "guava",
    "lychee",
    "persimmon",
    "starfruit",
    "coconut",
    "tangerine",
    "grapefruit",
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "blueberry",
    "pineapple",
    "watermelon",
    "kiwi",
    "mango",
    "peach",
    "pear",
    "plum",
    "cherry",
    "apricot",
    "pomegranate",
    "fig",
    "coconut",
    "nectarine",
    "raspberry",
    "blackberry",
    "cantaloupe",
    "honey",
  ];
//for length of array
  console.log(fruits.length);

// //translate to capital letter for all elements of array
//   const newFruits = fruits.map((fruits) =>{
//     return fruits.toUpperCase();
// });
//   console.log(newFruits);


//ascending order for all elements in array
 console.log(newFruits.sort().toString());
//same method
fruits.forEach((element) => {
    console.log(element);
});
//decending order
console.log(fruits.sort().toString());
console.log(fruits.reverse());


// //check if your array consist of cherry
// console.log(fruits.includes("cherry"));
// //find index of cherry
// console.log(fruits.indexOf("cherry"));
// //add sagar before cherry
// const addsagar = fruits.splice(13,0,"sagar");
// console.table(fruits);
// //delete all array after sagar
// const deletesagar = fruits.splice(13,100,"sagar");
// console.table(fruits);
