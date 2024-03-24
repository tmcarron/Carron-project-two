let name = prompt("Please enter your name");
console.log(name);
let holes = prompt(`Hi ${name}, How would you like to play 3 or 6 holes?`);

let putts = 0;
let par = 3 * holes;
for(let i = 1; i <= holes; i++){
    putts = prompt(`How many putts for hole ${i}`);
    par -= putts;
    console.log("putts "+ putts);
    console.log("Par " + par);
}

if(par > 0){
    alert(`Great job, ${name}! Your total par was: -${par}!`);
    console.log(`Great Job ${name}! Your total par was -${par}!`);

}
else if(par == 0){
    alert(`Good game, ${name}! Your total par was: ${par}!`);
    console.log(`Good game job ${name}! Your  total par was ${par}!`);

}
else{
    alert(`Nice try, ${name}... Your total par was +`+Math.abs(par));
    console.log(`Nice try, ${name}... Your total par was +`+Math.abs(par));

}
