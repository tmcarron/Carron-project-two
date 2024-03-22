let name = prompt("Please enter your name");
console.log(name);
let holes = prompt(`Hi ${name}, How would you like to play 3 or 6 holes?`);

let putts = 0;
let par = 3 * holes;
for(let i = 1; i <= holes; i++){
    putts = prompt(`How many putts for hole ${i}`);
    par -= putts;
    console.log(putts);
    console.log(par);
}
if(par >= 0){
    alert(`Good job! Your par was ${par}!`);
    console.log(`Good job! Your par was ${par}!`);

}
else{
    alert("Sorry, you lose. Your par was "+par);
    console.log("Sorry, you lose. Your par was "+par);

}
