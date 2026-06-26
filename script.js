function runProgram() {

let output = "";

console.clear();

const studentName = "SHAIK ANAS";
const rollNumber = "23A91A05D0";
const course = "B.Tech Data Science";
const age = 21;

let marks1 = 85;
let marks2 = 78;
let marks3 = 92;
let marks4 = 88;
let marks5 = 81;

output += "<h2>Student Details</h2>";
output += "<b>Name:</b> " + studentName + "<br>";
output += "<b>Roll Number:</b> " + rollNumber + "<br>";
output += "<b>Course:</b> " + course + "<br>";
output += "<b>Age:</b> " + age + "<br><br>";

console.log("Student Name:", studentName);
console.log("Roll Number:", rollNumber);
console.log("Course:", course);
console.log("Age:", age);

let total = marks1 + marks2 + marks3 + marks4 + marks5;
let average = total / 5;
let percentage = average;

output += "<h2>Marks</h2>";
output += "Marks: " + marks1 + ", " + marks2 + ", " + marks3 + ", " + marks4 + ", " + marks5 + "<br>";
output += "<b>Total:</b> " + total + "<br>";
output += "<b>Average:</b> " + average.toFixed(2) + "<br>";
output += "<b>Percentage:</b> " + percentage.toFixed(2) + "%<br><br>";

console.log("Total:", total);
console.log("Average:", average);
console.log("Percentage:", percentage);

let grade;

if(percentage>=90){
grade="A+";
}
else if(percentage>=80){
grade="A";
}
else if(percentage>=70){
grade="B";
}
else if(percentage>=60){
grade="C";
}
else if(percentage>=50){
grade="D";
}
else{
grade="Fail";
}

output += "<h2>Result</h2>";
output += "<b>Grade:</b> " + grade + "<br>";

if(percentage>=85){
output += "Scholarship: Eligible<br>";
}
else{
output += "Scholarship: Not Eligible<br>";
}

if(percentage>=50){
output += "Status: PASS<br><br>";
}
else{
output += "Status: FAIL<br><br>";
}

output += "<h2>Numbers 1 to 20</h2>";

for(let i=1;i<=20;i++){
output += i + " ";
}

output += "<br><br>";

output += "<h2>Even Numbers (1-50)</h2>";

for(let i=1;i<=50;i++){
if(i%2==0){
output += i + " ";
}
}

output += "<br><br>";

output += "<h2>Odd Numbers (1-50)</h2>";

for(let i=1;i<=50;i++){
if(i%2!=0){
output += i + " ";
}
}

output += "<br><br>";

let num=7;

output += "<h2>Multiplication Table of 7</h2>";

for(let i=1;i<=10;i++){
output += num + " × " + i + " = " + (num*i) + "<br>";
}

let N=20;
let sum=0;

for(let i=1;i<=N;i++){
sum+=i;
}

output += "<br><b>Sum of 1 to " + N + " = " + sum + "</b><br><br>";
    // ===============================
// Part 5: JavaScript Syntax Practice
// ===============================

output += "<h2>JavaScript Syntax Practice</h2>";

// Swapping Numbers

let a = 10;
let b = 20;

output += "<b>Before Swapping:</b> a = " + a + ", b = " + b + "<br>";

let temp = a;
a = b;
b = temp;

output += "<b>After Swapping:</b> a = " + a + ", b = " + b + "<br><br>";

console.log("After Swapping:", a, b);

// Positive or Negative

let number = -15;

if(number > 0){
output += number + " is Positive<br><br>";
}
else if(number < 0){
output += number + " is Negative<br><br>";
}
else{
output += number + " is Zero<br><br>";
}

// Largest of Three Numbers

let x = 45;
let y = 80;
let z = 60;

let largest;

if(x >= y && x >= z){
largest = x;
}
else if(y >= x && y >= z){
largest = y;
}
else{
largest = z;
}

output += "<b>Largest Number:</b> " + largest + "<br><br>";

// Leap Year

let year = 2028;

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
output += year + " is a Leap Year<br><br>";
}
else{
output += year + " is Not a Leap Year<br><br>";
}

// Factorial

let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
factorial *= i;
}

output += "Factorial of " + n + " = " + factorial + "<br><br>";

// Reverse Digits

let num1 = 12345;
let reverse = 0;
let tempNum = num1;

while(tempNum > 0){

let digit = tempNum % 10;

reverse = reverse * 10 + digit;

tempNum = parseInt(tempNum / 10);

}

output += "Reverse of " + num1 + " = " + reverse + "<br><br>";

// Palindrome

let original = 121;
let rev = 0;
let temp2 = original;

while(temp2 > 0){

let digit = temp2 % 10;

rev = rev * 10 + digit;

temp2 = parseInt(temp2 / 10);

}

if(original == rev){

output += original + " is Palindrome<br><br>";

}
else{

output += original + " is Not Palindrome<br><br>";

}

// Fibonacci Series

output += "<b>Fibonacci Series:</b><br>";

let f1 = 0;
let f2 = 1;

output += f1 + " " + f2 + " ";

for(let i = 3; i <= 10; i++){

let next = f1 + f2;

output += next + " ";

f1 = f2;
f2 = next;

}

output += "<br><br>";

// Digit Count

let value = 987654;
let count = 0;
let temp3 = value;

while(temp3 > 0){

count++;

temp3 = parseInt(temp3 / 10);

}

output += "Digit Count of " + value + " = " + count + "<br><br>";

// Sum of Digits

let number2 = 5678;
let sumDigits = 0;
let temp4 = number2;

while(temp4 > 0){

sumDigits += temp4 % 10;

temp4 = parseInt(temp4 / 10);

}

output += "Sum of Digits of " + number2 + " = " + sumDigits + "<br><br>";

console.log(output);

document.getElementById("output").innerHTML = output;

  }
