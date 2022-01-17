//simple programe of function;
function get(){
    return "good morning"
}
console.log(get())

//with pararmeter
function greet(name){
    return "hello " +name 
}
let name = ("sayyed")
console.log(greet(name))

// adiition of two number in function

function myfunction(p1,p2){
    
    return (p1+p2);
    
}
console.log(myfunction(2,3));

//multiplication of two number in function


function add(num1,num2){

    return (num1*num2);
}
console.log(add(100,200));

//even programming in function

function iseven(x){

    return x % 2 === 0;
}
console.log(iseven(20));
console.log(iseven(39));

//positive or negative number in function
function absvalue(number){
    if (number < 0){
        return -number;
    }
    return number;
}
console.log((absvalue(-6)));
console.log((absvalue(20)));



//factorial of number in function
function factorial(n){
    if (n === 0){
    return 1;
}
 return n*factorial(n-1);
}
console.log(factorial(5));

//program to convert fahrenheit to calcius;
function tocelsius(f){
    return (5/9)*(f-32);
}
console.log(tocelsius(200))

// program to reverse a number;
function reversenumber(n)
{
    n = n+ "";
    return n.split("").reverse().join("")

}
console.log((reversenumber(32243)))

//object program;
let person = {
    firstname : "sayyed",
    lastname :"fahed",
    age : 50,
    eyecolor :"blue",
}
console.log(person)
console.log(person.firstname)

//object program
let student = {
    name : "john",
    age : 18,
    marks : [98,99,95,100],
    condition :"good"

}
console.log(student)