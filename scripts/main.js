//use let instead of var
console.log("Task 1")
for (let i=1; i<=10; i++){
    console.log(i*i)
}


console.log("Task 2")
for (let i=5; i>=1; i--){
   console.log(i);
}
console.log("Blastoff!");


console.log("Task 3")
for (let i=0; i<=50; i+=2){
    console.log(i);
}


console.log("Task 4")
let sum = 0
for (let i = 1; i <= 100; i += 1){
    sum += i;
}
console.log(sum);

console.log("Task 5")
for (let n = 1; n<=10; n+=1){

    let iFactorial = 1;
    for (let i=1; i<=n; i+=1){
        iFactorial *= i;
     }
     console.log(iFactorial);
}

