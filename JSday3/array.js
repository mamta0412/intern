// const fruits=["apple", "orange", "banana", "pineapple","gauva"];
// // console.log(fruits);
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// // console.log(fruits[3]);

// // console.log(fruits.indexOf("apple"));
// // console.log(fruits.at(0));


// // console.log(fruits.lastIndexOf());
// // console.log(fruits[fruits.length-1]);
// // console.log(fruits[4]);

// // console.log(fruits.join(" @ "));

// //delete last array
// const newFruits= fruits.pop();
// console.log(fruits);
// console.log(newFruits);



// const members=["Sanjok","Sonila","Suraj","Sagar","Anurag", "Mamta","Dipika","Aditya","Ashok","Roshika","Pramesh"];
// //pop
// const popPramesh = members.pop();
// console.log(popPramesh);
// console.log(members);
// const popRoshika = members.pop();
// console.log(popRoshika);
// console.log(members);
// const popashok = members.pop();
// console.log(popashok);
// console.log(members);
// const popaditya = members.pop();
// console.log(popaditya);
// console.log(members);
// const popdipika = members.pop();
// console.log(popdipika);
// console.log(members);
// const popmamta= members.pop();
// console.log(popmamta);
// console.log(members);
// const popanurag = members.pop();
// console.log(popanurag);
// console.log(members);
// const popsagar= members.pop();
// console.log(popsagar);
// console.log(members);
// const popsuraj = members.pop();
// console.log(popsuraj);
// console.log(members);
// const popsonila = members.pop();
// console.log(popsonila);
// console.log(members);
// const popsanjok = members.pop();
// console.log(popsanjok);
// console.log(members);

// //push
// const pushanurag= members.push("Anurag");
// console.log(members);
// const pushmamta= members.push("Mamta");
// console.log(members);
// const pushdipika= members.push("Dipika");
// console.log(members);
// const pushaditya= members.push("Aditya");
// console.log(members);
// const pushpramesh= members.push("Pramesh");
// console.log(members);
// const pushsonila= members.push("Sonila");
// console.log(members);
// const pushsanjok= members.push("Sanjok");
// console.log(members);
// const pushsuraj= members.push("Suraj");
// console.log(members);
// const pushsagar= members.push("Sagar");
// console.log(members);
// const pushroshika= members.push("Roshika");
// console.log(members);
// const pushashok= members.push("Ashok");
// console.log(members);

// const unshiftproject= members.unshift("Project");
// console.log(members);
// const removeproject= members.shift();
// console.log(members);



const fruits=["apple", "orange", "banana", "mango","gauva"];
// const replace= fruits.copyWithin(2,0);
// console.log(replace);
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

// fruits.copyWithin(2,0);
// console.log(fruits);
// fruits.copyWithin(3,0);
// console.log(fruits);
// fruits.copyWithin(4,0);
// console.log(fruits);

//splice-used to add new items to an array
const add= fruits.splice(3, 0, "Lemon", "Kiwi");
console.log(fruits);