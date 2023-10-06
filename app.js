// ********** FUNCTION ************


// Q NO 1


// function displayDateTime() {
//     var currentDate = new Date();
//     var dateTimeString = "Current Date and Time: " + currentDate.toLocaleString();
//     document.body.innerHTML = '<h1>' + dateTimeString + '</h1>';
// }

// displayDateTime();

// Q NO 2

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     var greeting = "Hello, " + fullName + "! Welcome!";
//     return greeting;
// }

// // Example usage of the function
// var userFirstName = prompt("Enter your first name:");
// var userLastName = prompt("Enter your last name:");

// var greetingMessage = greetUser(userFirstName, userLastName);
// alert(greetingMessage);


// Q NO 3

// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var sum = num1 + num2;
//     return sum;
// }
// var result = addNumbers();
// alert(result);

// Q NO 4


// function calculate(num1, num2, operator) {
//     let result;
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num1 / num2;
//         break;
//       default:
//         result = "wrong number";
//     }
//     return result;
//   }

// Q NO 5

// function square(number) {
//     return number * number;
// }
// var num = 5;
// var squaredNum = square(num);
// console.log("The square of " + num + " is: " + squaredNum);

// Q NO 6

// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }

// var num = 5;
// var result = factorial(num);
// console.log("The factorial of " + num + " is: " + result);


// Q NO 7

// function displayCounting(start, end) {
//     if (start <= end) {
//         for (let i = start; i <= end; i++) {
//             document.write(i + "<br>");
//         }
//     } else {
//         document.write("Invalid input: Start number should be less than or equal to the end number.");
//     }
// }
// var startNumber = 1;
// var endNumber = 10;
// displayCounting(startNumber, endNumber);

// Q NO 8

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuseSquare = baseSquare + perpendicularSquare;
//     const hypotenuse = Math.sqrt(hypotenuseSquare);
//     return hypotenuse;
// }
// var baseLength = 3;
// var perpendicularLength = 4;
// var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
// console.log("Hypotenuse of the right angle triangle: " + hypotenuse);

// Q NO 9

// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// var area1 = calculateRectangleArea(5, 10);
// console.log("Area of the rectangle: " + area1);

// Q NO 10

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

var word = "madam";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

// Q NO 11

function capitalizeFirstLetterOfEachWord(str) {
    var words = str.split(' ');
    var capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });


    var capitalizedString = capitalizedWords.join(' ');

    return capitalizedString;
}

var inputString = 'the quick brown fox';
var outputString = capitalizeFirstLetterOfEachWord(inputString);
console.log("Original String: " + inputString);
console.log("Capitalized String: " + outputString);

// Q NO 12

function findLongestWord(str) {
    var words = str.split(' ');

    var longestWord = '';
    var maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        var cleanedWord = words[i].replace(/[^A-Za-z]/g, '');
        var wordLength = cleanedWord.length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
            longestWord = cleanedWord;
        }
    }

    return longestWord;
}
var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
console.log("Longest word in the string: " + longestWord);

// Q NO 13

function countOccurrences(str, letter) {
    
    let lowerStr = str.toLowerCase();
    let lowerLetter = letter.toLowerCase();

    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerLetter) {
            count++;
        }
    }

    return count;
}

let inputString = 'JSResourceS.com';
let specifiedLetter = 'o';
let occurrences = countOccurrences(inputString, specifiedLetter);
console.log("Number of occurrences of '" + specifiedLetter + "' in the string: " + occurrences);


// Q NO 14

function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference.toFixed(2));
}

function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area.toFixed(2));
}

var radius = 5;
calcCircumference(radius);
calcArea(radius);
