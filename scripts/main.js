
//use let instead of var
console.log("Task 1")
for (let i=1; i<=10; i++){
    console.log(i*i);
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
let sum = 0;
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

console.log("Task 6")
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("Task 7")
for (let i = 0; i < arr.length; i++){
    console.log(arr.at(-1 * i -1));
}
console.log("Task 8")
let cubic = [];
for (let i = 1; i <= 10; i++){
    cubic.push(i*i*i);
} 
console.log(cubic);

console.log("Task 9")
let fibonacci = [0, 1];
for (let i = 0; i <= 10; i++){
    fibonacci.push(fibonacci.at(-1)+fibonacci.at(-2));
}
console.log(fibonacci);

console.log("Task 10")
let cheese = [];
for (let i = 0; i < arr.length; i++){
    cheese.push(arr.at(-1*i-1));
}
console.log(cheese);