// const errorhandler =()=>{
//    dadalert("Welcome.");
// }
// catch (err){
//    console.log(err);
// }

const details ={
    name:"mamta",
    lastaname:"pokhrel",
    age:22,
    weight:"50 kg"
};
const update={
    age:24,
    likes:"books"
};
const updated={...details, ...update};
const updated1={...updated, name:"dipika"};
console.log(updated);
console.log(updated1);