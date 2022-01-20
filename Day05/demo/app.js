
var number = 5;
var string = "Hello World";
var boolean = true;

var testing;


console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof NaN); // javascript considers NaN to be a number

// variable for max height
// an example of Camel Case nameing convention
var maxHeightWindow = 23;

// * Popup Boxes in Javascript
// TODO: alert, confirm and, prompt
// * alert:
var alertAnswer = alert(" Hello I am Javascript");
console.log("alert answer is : ", alertAnswer);

// * confirm: it will return a Boolean 
var userAnswer = confirm("Are you excited? ");
console.log("user answered with:", userAnswer);


// * prompt: 
// add a new line using \n
var yourAge = prompt("What is your age?\nWhat is your fav color?");
console.log("your age is:", yourAge);

var yourColor = prompt("What is your fav color?");
var yourName = prompt("What is your name?");
// Welcome userName
alert("Welcome  " + yourName);
alert(`Welcome for the second time ${yourName}, nice to meet you`);


if (yourName.toUpperCase() == "KARAM") {
    console.log("Hello Karam");
} else {
    console.log("Hello stranger");
}

if (yourAge > 30) {
    console.log("Never too old to learn Javascript");
} else if (yourAge < 20) {
    console.log("Never too young to learn Javascript");
} else {
    console.log("Learning Javascript is never not fun");
}

var likeJavascript = confirm("Do you like Javascript?");

if (likeJavascript) {
    alert("You are in our team");
}
else {
    alert("You are missing a lot");
}

// ternery if
var result = (likeJavascript) ? "You are in our team" : "You are missing a lot";
alert(result);

var ageResult = (yourAge > 30) ? "Never too old to learn Javascript" :
                (yourAge < 20) ? "Never too young to learn Javascript" :
                                 "Learning Javascript is never not fun";

alert(ageResult);

var season = prompt("What is your fav season?");

switch (season) {
    case "winter": // if(season == "winter")
        alert("Aren't you freezing?")
        break;

    case "summer":
        alert("Who doesn't like Summer");
        break;

    case "spring":
        alert("Spring is the best season");
        break;
    case "autumn":
        alert("Autumn is a bad season");
        break;

    default:
        alert("what do you like then???");
}