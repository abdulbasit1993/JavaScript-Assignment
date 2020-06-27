// Chapter # 1

// Task # 1
alert("Welcome to our website!");

// Task # 2
alert("Error! Please enter a valid password.");

// Task # 3
alert("Welcome to JS Land...\nHappy Coding!");

// Task # 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task # 5
alert("Hello... I can run JS through my web browser's console");

// Task # 6 and 7
function btnAlert() {
    alert("You clicked the button!");
}

// Chapter # 2

// Task # 1
var username;

// Task # 2
var myName = "Abdul Basit Mehtab";

// Task # 3
var message = "Hello World!";
alert(message);

// Task # 4
var studentName = "Jhone Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Task # 5
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Task # 6
var email = "abasitm.1993@gmail.com";
alert("My email address is " + email);

// Task # 7
var book = "A smarter \nway to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Task # 8
document.write("<br>");
document.write("Yah! I can write HTML content through JavaScript");

// Task # 9
var specialString = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(specialString);
document.write("<br>");
document.write("<br>" + specialString);

// Chapter # 3

// Task # 1
var age = 26;
alert("I am " + age + " years old");

// Task # 2
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
// document.getElementById('CounterVisitor').innerHTML = n;
alert("You have visited this site " + n + " times");

// Task # 3
var birthYear = "1993";
document.write("<br>");
document.write("<br>");
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

// Task # 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<br>");
document.write("<br>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");

// Chapter # 4

// Task # 1
var variable1 = "JavaScript",
    variable2 = "is",
    variable3 = "Cool!";

// Task # 2
// Legal variable names:
var variable1;
var $variable2;
var _variable3;
var my_4thvariable;
var $my_5thvariable;
/* 
Illegal variable names:
var 1stnum;
var 2ndnum;
var 3rdnum;
var 4thnum;
var 5thnum; 
*/

// Task # 3
var str1 = "letters",
    str2 = "numbers",
    str3 = "underscores",
    str4 = "dollar signs";
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain " + str1 + ", " + str2 + ", " + str3 + ", and " + str4 + ". For example $my_1stVariable");
document.write("<br>");
var str5 = "letter",
    str6 = "a dollar sign ($)",
    str7 = "an underscore (_)";
document.write("Variables must begin with a " + str5 + ", " + str6 + ", or " + str7 + ". For example $name, _name or name");
document.write("<br>");
var str8 = "case-sensitive";
document.write("Variable names are " + str8);
document.write("<br>");
var str9 = "keywords";
document.write("Variable names should not be JS " + str9);

// Chapter # 5

// Task # 1
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var sum = (+num1) + (+num2);
document.write("<br>");
document.write("<br>");
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Task # 2
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var sub = num1 - num2;
document.write("<br>");
document.write("Subtraction of " + num1 + " from " + num2 + " is " + sub);

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var mult = num1 * num2;
document.write("<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + mult);

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var divide = num1 / num2;
document.write("<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divide);

var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var mod = num1 % num2;
document.write("<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);

// Task # 3
document.write("<br>");
document.write("<br>");
var numvar;
document.write("Value after variable declaration is: " + numvar);
document.write("<br>");
numvar = 5;
document.write("Initial value: " + numvar);
document.write("<br>");
numvar++;
document.write("Value after increment is: " + numvar);
document.write("<br>");
numvar = numvar + 7;
document.write("Value after addition is: " + numvar);
document.write("<br>");
numvar--;
document.write("Value after decrement is: " + numvar);
document.write("<br>");
numvar = numvar % 3;
document.write("The remainder is: " + numvar);

// Task # 4
document.write("<br>");
document.write("<br>");
var ticketPrice = 600;
var ticketQuantity = 5;
var totalPrice = ticketQuantity * ticketPrice;
document.write("Total cost to buy " + ticketQuantity + " tickets to a movie is " + totalPrice + "PKR");

// Task # 5
document.write("<br>");
document.write("<br>");
var tablenum = 8;
document.write("Table of " + tablenum);
document.write("<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tablenum + " x " + i + " = " + tablenum * i + "<br>");
}

// Task # 6
document.write("<br><br>");
var Cel = 25;
var Fah = (Cel * 9 / 5) + 32;
document.write(Cel + "°C" + " is " + Fah + "°F");
var Fahr = 70;
var Cels = (Fahr - 32) * 5 / 9;
document.write("<br>");
document.write(Fahr + "°F" + " is " + Cels + "°C");

// Task # 7
document.write("<br><br>");
document.write("<h1>Shopping Cart</h1>");
var price_item1 = 650;
var price_item2 = 100;
var quantity_item1 = 3;
var quantity_item2 = 7;
var shipping_charges = 100;
var totalCost = (price_item1 * quantity_item1) + (price_item2 * quantity_item2) + shipping_charges;
document.write("Price of item 1 is " + price_item1 + "<br>");
document.write("Quantity of item 1 is " + quantity_item1 + "<br>");
document.write("Price of item 2 is " + price_item2 + "<br>");
document.write("Quantity of item 2 is " + quantity_item2 + "<br>");
document.write("Shipping Charges " + shipping_charges);
document.write("<br><br>");
document.write("Total cost of your order is " + totalCost);

// Task # 8
document.write("<br><br>");
document.write("<h1>Marks Sheet</h1>");
var marks_obtained = 804;
var total_marks = 980;
var percentage = (marks_obtained / total_marks) * 100;
document.write("Total marks: " + total_marks + "<br>");
document.write("Marks obtained: " + marks_obtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Task # 9
document.write("<br><br>");
document.write("<h1>Currency in PKR</h1>");
var usdRate = 104.80;
var riyalRate = 28;
var pkr = (10 * usdRate) + (25 * riyalRate);
document.write("Total Currency in PKR: " + pkr);

// Task # 10
document.write("<br><br>");
document.write("<h1>Arithmetic Calculations</h1>");
var myNumber = 6;
var result = myNumber + 5 * 10 / 2;
document.write("Result of calculations is: " + result);

// Task # 11
document.write("<br><br>");
var currentYear = 2020;
var yearOfBirth = 1993;
var age1 = currentYear - yearOfBirth;
var age2 = age1 - 1;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear);
document.write("<br>");
document.write("Birth Year: " + yearOfBirth);
document.write("<br>");
document.write("They are either " + age1 + " or " + age2 + " years old");

// Task # 12
document.write("<br><br>");
document.write("<h1>The Geometrizer</h1>");
var circle_radius = 20;
var circumference = 2 * 3.142 * circle_radius;
var area_circle = 3.142 * circle_radius * circle_radius;
document.write("Radius of a circle: " + circle_radius);
document.write("<br>");
document.write("The circumference is: " + circumference);
document.write("<br>");
document.write("The area is: " + area_circle);

// Task # 13
document.write("<br><br>");
document.write("<h1>The Lifetime Supply Calculator</h1>");
var fav_snack = "Potato Chips";
var current_age = 26;
var max_age = 68;
var amount_per_day = 2;
var totallifetimesupply = (amount_per_day * 365) * (max_age - current_age);
document.write("You will need " + totallifetimesupply + " " + fav_snack + " to last you until the ripe old age of " + max_age);

// Chapters # 6 - 9

// Task # 1
document.write("<h1>——————————————————————————————————————————</h1>");
var a = 10;

document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
document.write("<br><br>");
document.write("The value of ++a is: " + ++a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of a++ is: " + a++);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of --a is: " + --a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br><br>");
document.write("The value of a-- is: " + a--);
document.write("<br>");
document.write("Now the value of a is: " + a);

// Task # 2
document.write("<br><br><br>");
var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);

// Task # 3
document.write("<br><br>");
var username = prompt("Enter your name:");
document.write("Welcome " + username + "!");

// Task # 4
document.write("<br><br>");
var multablenum = prompt("Enter a number to display it's Multiplication Table:");
var i;
document.write("<h1>Multiplication Table</h1>");

if (multablenum == "") {
    for (i = 1; i <= 10; i++) {
        document.write(5 + " x " + i + " = " + 5 * i + "<br>");
    }
} else {
    for (i = 1; i <= 10; i++) {
        document.write(multablenum + " x " + i + " = " + multablenum * i + "<br>");
    }
}

// Task # 5
document.write("<br><br>");
var subject1 = prompt("Enter name of First Subject: ");
var subject2 = prompt("Enter name of Second Subject: ");
var subject3 = prompt("Enter name of Third Subject: ");
var subject_marks = 100;
var total_subject_marks = subject_marks + subject_marks + subject_marks;
var obtained_subject1 = prompt("Enter marks obtained in First Subject: ");
var obtained_subject2 = prompt("Enter marks obtained in Second Subject: ");
var obtained_subject3 = prompt("Enter marks obtained in Third Subject: ");
var total_obtained_marks = (+obtained_subject1) + (+obtained_subject2) + (+obtained_subject3);
var total_percentage = (total_obtained_marks / total_subject_marks) * 100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td><script>document.write(subject1);</script></td><td><script>document.write(subject_marks);</script></td><td><script>document.write(obtained_subject1);</script></td><td><script>document.write(obtained_subject1 + '%');</script></td></tr><tr><td><script>document.write(subject2);</script></td><td><script>document.write(subject_marks);</script></td><td><script>document.write(obtained_subject2);</script></td><td><script>document.write(obtained_subject2 + '%');</script></td></tr><tr><td><script>document.write(subject3);</script></td><td><script>document.write(subject_marks);</script></td><td><script>document.write(obtained_subject3);</script></td><td><script>document.write(obtained_subject3 + '%');</script></td></tr><tr><td></td><td><script>document.write(total_subject_marks);</script></td><td><script>document.write(total_obtained_marks);</script></td><td><script>document.write(total_percentage + '%');</script></td></tr></table>");

// Chapters # 9 - 11

// Task # 1
document.write("<br><br>");
var city_name = prompt("Enter name of city: ");
if (city_name == "Karachi" || city_name == "karachi") {
    alert("Welcome to City of Lights!");
}

// Task # 2
document.write("<br><br>");
var your_gender = prompt("Enter your gender: e.g. Male / Female");
if (your_gender == "Male" || your_gender == "male") {
    alert("Good Morning Sir!");
}
if (your_gender == "Female" || your_gender == "female") {
    alert("Good Morning Ma'am!");
}

// Task # 3
document.write("<br><br>");
var traffic_signal = prompt("Enter color of road traffic signal: ");
if (traffic_signal == "Red" || traffic_signal == "red") {
    alert("Must Stop!");
}
if (traffic_signal == "Yellow" || traffic_signal == "yellow") {
    alert("Ready to move!");
}
if (traffic_signal == "Green" || traffic_signal == "green") {
    alert("Move now!");
}

// Task # 4
document.write("<br><br>");
var remaining_fuel = prompt("Enter remaining fuel in car (in litres): ");
if (remaining_fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Task # 5
document.write("<br><br>");
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Task # 6
document.write("<br><br>");
var marks_1 = prompt("Enter marks obtained in first subject: ");
var marks_2 = prompt("Enter marks obtained in second subject: ");
var marks_3 = prompt("Enter marks obtained in third subject: ");
var total_marks_obt = (+marks_1) + (+marks_2) + (+marks_3);
var total_marks_subjs = prompt("Enter total marks: ");
var percentage_of_marks = total_marks_obt / total_marks_subjs * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " +total_marks_subjs);
document.write("<br>");
document.write("Marks obtained: " +total_marks_obt);
document.write("<br>");
document.write("Percentage: " +percentage_of_marks + "%");
document.write("<br>");
if(percentage_of_marks >= 80) {
    document.write("Grade: A-one");
    document.write("<br>");
    document.write("Remarks: Excellent");
} 
else if(percentage_of_marks >= 70) {
    document.write("Grade: A");
    document.write("<br>");
    document.write("Remarks: Good");
} 
else if(percentage_of_marks >= 60) {
    document.write("Grade: B");
    document.write("<br>");
    document.write("Remarks: You need to improve");
    
}
else if(percentage_of_marks < 60) {
    document.write("Grade: Fail");
    document.write("<br>");
    document.write("Remarks: Sorry");
}

// Task # 7
document.write("<br><br>");
var secret_num = 8;
var num_guess = prompt("Enter your guess of secret number: ");
if(num_guess == 8) {
    alert("Bingo! Correct answer");
}
else if(num_guess == secret_num + 1) {
    alert("Close enough to the correct answer");
}

// Task # 8
document.write("<br><br>");
var num_to_check = prompt("Enter a number to check if it's divisible by 3 :");
if(num_to_check % 3 == 0) {
    alert("This number is divisible by 3");
}

// Task # 9
document.write("<br><br>");
var num_even_odd = prompt("Enter a number to check if it's even or odd :");
if(num_even_odd % 2 == 0) {
    alert("Even number");
}
else {
    alert("Odd number");
}

// Task # 10
document.write("<br><br>");
var temper_input = prompt("Enter the temperature: ");
if(temper_input > 40) {
    alert("It is too hot outside");
}
else if(temper_input > 30) {
    alert("The Weather today is Normal");
}
else if(temper_input > 20) {
    alert("Today's Weather is cool");
}
else if(temper_input > 10) {
    alert("OMG! Today's weather is so Cool");
}

// Task # 11
document.write("<br><br>");
var calc_val1 = prompt("Enter your first value:");
var calc_sign = prompt("Enter your operator (+, -, *, /, or %)");
var calc_val2 = prompt("Enter your second value:");

if(calc_sign === '+') {
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (parseInt(calc_val1) + parseInt(calc_val2)));
} else if(calc_sign === '-'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 - calc_val2));
} else if(calc_sign === '*'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 * calc_val2));
} else if(calc_sign === '/'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 / calc_val2));
} else if(calc_sign === '%'){
    alert(calc_val1 + " " + calc_sign + " " + calc_val2 + " = " + (calc_val1 % calc_val2));
}

// Chapters # 12 - 13

// Task # 1
document.write("<br><br>");
var char_input = prompt("Enter any character: ");
var ascii_code = char_input.charCodeAt();
if (ascii_code >= 65 && ascii_code <= 90)
{
    alert("Character is an uppercase letter");
}
else if (ascii_code >= 97 && ascii_code <=122)
{
    alert("Character is a small letter");
}
else if (ascii_code >= 48 && ascii_code <= 57)
{
    alert("Character is a digit");
}
else if ((ascii_code > 0 && ascii_code <= 47)||(ascii_code >= 58 && ascii_code <= 64)||
(ascii_code >= 91 && ascii_code <=96)||(ascii_code >= 123 && ascii_code <= 127))
{
    alert("Character is a special symbol");
}

// Task # 2
document.write("<br><br>");
function max_integer()
{
    var max_val;
    var x = +prompt("Enter first number:");
    var y = +prompt("Enter second number:");
    if(x > y)
    {
        max_val = x;
    }
    else if(y > x){
        max_val = y;
    }
    else if(x == y && y == x) {
        alert("Both integers are equal");
    }
    else {
        alert("Both integers are not equal");
    }
    alert("Largest integer is: " +max_val);
}
max_integer();

// Task # 3
document.write("<br><br>");
var numb = prompt("Enter a number: ");
if(numb > 0) {
    alert("The number is positive");
}
else if(numb < 0) {
    alert("The number is negative");
}
else if(numb == 0) {
    alert("The number is zero");
}

// Task # 4
document.write("<br><br>");
var charac = prompt("Enter a character: ");
if(charac == 'a' || charac == 'A' || charac == 'e' || charac == 'E' || charac == 'i' || charac == 'I' || charac == 'o' || charac == 'O' || charac == 'u' || charac == 'U') {
    alert("This is a vowel");
} else {
    alert("This is not a vowel");
}

// Task # 5
document.write("<br><br>");
var correct_password = "abdulbasit";
var inp_password = prompt("Enter your password: ");
if(inp_password == "") {
    alert("Please enter your password");
}
else if (inp_password == correct_password) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// Task # 6
document.write("<br><br>");
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}
alert(greeting);

// Task # 7
document.write("<br><br>");
var inp_time = prompt("Enter time in 24 hours clock format (like 1900 = 7pm)");
if(inp_time >= 0000 && inp_time < 1200)
{
    alert("Good Morning!");
}
else if(inp_time >= 1200 && inp_time < 1700)
{
    alert("Good Afternoon!");
}
else if(inp_time >= 1700 && inp_time < 2100)
{
    alert("Good Evening!");
}
else if(inp_time >= 2100 && inp_time <= 2359)
{
    alert("Good Night!");
}

// Chapters # 14 - 16

// Task # 1
document.write("<br><br>");
var studentNames = [];

// Task # 2
document.write("<br><br>");
var studentNames2 = new Array();

// Task # 3
document.write("<br><br>");
var stringsArray = [ "apple", "orange", "mango" ];

// Task # 4
document.write("<br><br>");
var numbersArray = [40, 50, 60, 70, 80, 90];

// Task # 5
document.write("<br><br>");
var boolArray = [true, false];

// Task # 6
document.write("<br><br>");
var mixedArray = [1, "A ", 2, "Mixed ",3,"Array."];

// Task # 7
document.write("<br><br>");
var qualifications, text, fLen, i;
qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
fLen = qualifications.length;
document.write("Qualifications: " + "<br>");
text = "<ol>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + qualifications[i] + "</li>";
}
text += "</ol>";
document.write(text);

// Task # 8
document.write("<br><br>");
var studentNamesArray = ["Michael", "John", "Tony"];
var studentTotalScores = [320, 230, 480];
var totalMarks = 500;
document.write("Score of " + studentNamesArray[0] + " is " + studentTotalScores[0] + ". Percentage: " + studentTotalScores[0]/totalMarks * 100 + "%");
document.write("<br>");
document.write("Score of " + studentNamesArray[1] + " is " + studentTotalScores[1] + ". Percentage: " + studentTotalScores[1]/totalMarks * 100 + "%");
document.write("<br>");
document.write("Score of " + studentNamesArray[2] + " is " + studentTotalScores[2] + ". Percentage: " + studentTotalScores[2]/totalMarks * 100 + "%");

// Task # 9
document.write("<br><br>");
var colorNames = ["Red", "Green", "Blue"];
var i;
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
document.write("<br><br>");
var colorNamesAdd = prompt("Enter color name that you want to add to the start of the list: ");
colorNames.unshift(colorNamesAdd);
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
document.write("<br><br>");
var colorNamesAddtoEnd = prompt("Enter color name that you want to add to the end of the list: ");
colorNames.push(colorNamesAddtoEnd);
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
colorNames.unshift("Orange", "Purple");
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
colorNames.shift();
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
colorNames.pop();
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
var colorNamesAddtoindex = prompt("Enter color name that you want to add to the list: ");
var colorNamesIndex = +prompt("Enter the index/position at which you want to add the color name to the list: (for ex. 1)");
colorNames.splice(colorNamesIndex, 0, colorNamesAddtoindex);
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}
var colorNamestoDelete = +prompt("Enter the index/position at which you want to delete the color name from the list: (for ex. 2)");
var howManyColors = +prompt("How many colors do you want to delete? (for ex. 2):");
colorNames.splice(colorNamestoDelete, howManyColors);
document.write("<h2>Updated Array</h2>");
for(i = 0; i<colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}

// Task # 10
document.write("<br><br>");
var studentScoresArray = [320, 230, 480, 120];
document.write("Scores of Students: " + studentScoresArray);
document.write("<br>");
var sortedScores = studentScoresArray.sort();
document.write("Ordered Scores of Students: " + sortedScores);

// Task # 11
document.write("<br><br>");
var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedcities = citiesList.slice(2,5);
document.write("Cities List: " + "<br>");
document.write(citiesList);
document.write("<br><br>" + "Selected cities list:" + "<br>");
document.write(selectedcities);