const hour =55;
if (hour < 12){
    console.log("Good Morning.");
}
else{
    console.log("Good afternoon");
}


//odd even
const num =23;
if (num % 2 == 0){
console.log("Even");
}
else{
    console.log("Odd");
}

//swap two numbers
let a=10;
let b=23;
let extra=a;
a=b;
b=extra;
console.log(a,b);
// console.log(b);


//for loop
var text="*";
for( let i=0; i<5; i++){
    text = "the number is "+ i + "\n";
    console.log(text);
}

//pattern
var pattern="";
for( let i=1; i<=5; i++){
    for( let j= 1; j<=i; j++){
        pattern +="*";
    }
    pattern +="\n";
}
console.log(pattern);

// normal function
const myfunction = () => {
    console.log("hello my name is mamta");
  };
  
  myfunction();
  
  // arrow function
  myfunctionq = () => {
    console.log("hello");
  };
  
  // function call
  myfunctionq();

//function use garera sum
//odd even
//find out grade
//percentage