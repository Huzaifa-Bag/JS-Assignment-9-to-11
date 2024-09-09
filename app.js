                    // <<<<<<<<<<Chapter  9 to 11 JS Assignment>>>>>>>

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
                            //    Answer


var city = prompt("Enter a city");
if (city=="Karachi" || city=="karachi"){
    alert("Welcome to city of lights")
}



// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

                                 //    Answer


var gender = ["male","female"]
var input_gender =prompt("enter your gender")
if(input_gender == "male"){
    alert("Good morning Sir")

}else if(input_gender == "female"){
alert("Good morning ma'am ")

}else{
    alert("invalid input")
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Red              Must Stop
// Yellow Ready     to move
// Green            Move now

                                     //    Answer


var signal = prompt("enter your traffic light");
if(signal == "yellow"){
alert("Ready to move")

}else if(signal == "red"){

    alert("Must Stop")

}else if (signal == "green"){
    alert("Move now")

}else{
    alert("incorrect light")
}



// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”  

                             //    Answer

var fuel =prompt("Enter your fuel");
if (fuel<0.25){
    alert("Please refill the fuel in your car")
}




    
// 5. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs.

                                  //    Answer


var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
} 
// yes program will run

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// NO program will not run

 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// NO program will not run


if (c === 13){
alert("condition 2 is true");
}
// Yes program will run


if (++c < 14){
alert("condition 3 is true");
}
// Yes program will run


if(c === 14){
alert("condition 4 is true");
}
// NO program will not run



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Yes program will run




if (true){
alert("True");
}
if (false){
alert("False");
}
// Yes program will run



if("car" < "cat"){
alert("car is smaller than cat");
}
// yes program will run




// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
                                  //    Answer


var subject1= prompt("Enter Subject1 marks");
subject1 = Number.parseFloat(subject1);
var subject2= prompt("Enter Subject2 marks");
subject2 = Number.parseFloat(subject2);
var subject3= prompt("Enter Subject3 marks");
subject3 = Number.parseFloat(subject3);
var Total_marks = 300;
var Obt_marks = subject1 + subject2 + subject3
var percentage = (Obt_marks*100)/Total_marks;
if (percentage>=80){
    console.log("Total Marks = " + Total_marks);
    console.log("Obtained Marks = " + Obt_marks);
    console.log( "Pefcentage = " +percentage + "%")
    console.log("Grade = A-one" );
    console.log("Excellent");
}else if (percentage>=70){
    console.log("Total Marks = " + Total_marks);
    console.log("Obtained Marks = " + Obt_marks);
    console.log( "Pefcentage = " +percentage + "%")
    console.log("Grade = A" );
    console.log("Good");
}else if (percentage>=60){
    console.log("Total Marks = " + Total_marks);
    console.log("Obtained Marks = " + Obt_marks);
    console.log( "Pefcentage = " +percentage + "%")
    console.log("Grade = B");
    console.log("You need to improve");
}else if (percentage<60){
    console.log("Total Marks = " + Total_marks);
    console.log("Obtained Marks = " + Obt_marks);
    console.log( "Pefcentage = " +percentage + "%")
    console.log("Grade = Fail");
    console.log("Sorry");
}



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

                                           //    Answer



var secretNum = 4;
var userNum = +prompt("enter your number")

if(userNum === secretNum){
alert("Bingo! Correct answer")

}else if (userNum+1 === secretNum){
    alert("Close enough to the correct answer")
}else{
    alert("Sorry, try again!")
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

                                         //    Answer

var num1 = prompt("Enter a number");
if (num1%3==0){
    alert("Number is divisible by 3")
}else{
    alert("NUmber is not divisible by 3")
}





// 9. Write a program that checks whether the given input is an
// even number or an odd number.

                                       //    Answer

var num = +prompt("enter your number check this Even and Odd")

if(num%2 == 0){
alert("this Even number")
}else{
    alert("this  Odd number")
}



// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

                                        //    Answer

var T=prompt("Enter a Tempeture");
T = Number.parseInt(T);
if(T>40){
    alert("It is too hot outside.")
}else if(T>30){
    alert("The Weather today is Normal.")
}else if(T>20){
    alert("Today’s Weather is cool.")
}else if(T>10){
    alert("OMG! Today’s weather is so Cool.")
}







// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

                                            //    Answer


var first_number = prompt("Enter first number");
first_number = Number.parseInt(first_number);
var second_number = prompt("Enter second number");
second_number = Number.parseInt(second_number);
var Operation = prompt("Enter your operation");
if (Operation== "+"){
    alert("The sum is = " + (first_number + second_number))
}else if (Operation== "-"){
    alert("The substract is = " + (first_number - second_number))
}else if (Operation== "*"){
    alert("The Multiplication is = " + (first_number * second_number))
}else if (Operation== "/"){
    alert("The division is = " + (first_number / second_number))
}else if (Operation== "%"){
    alert("The reminder is = " + (first_number % second_number))
}