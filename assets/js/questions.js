// function button1Func() {
//     alert("File 1 Connected")
// }
// console.log(button1Func)

// I'm accessing the log method of my console object. I pass the method an argument
// in this case the argument is a string.
console.log('questions.js file has been read first');

// let timer;
// let count


//These are my Quiz Questions:
const questions = [
    {
       question: '1. How do you write "Hello World" in an alert box?',
       answers: ['alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");'],
       correctAnswer: 'alert("Hello World");'
    },
    {
        question: '2. How do you create a function in JavaScript?',
        answers: ['function = myFunction()', 'function myFunction()', "function:myFunction()"],
        correctAnswer: 'function myFunction()'
    },
    {
        question: '3. How do you write "Hello World" in an alert box?',
        answers: ['alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");','msg("Hello World");'],
        correctAnswer: 'alert("Hello World");'

        // continue with my questions and possible answers
    },
    {
        question: '4. How do you create a function in JavaScript?',
        answers: ['function = myFunction()', 'function myFunction()', 'Function:myFunction()'],
        correctAnswer: 'function myFunction()'
     },
     {
        question: '5. How do you call a function named "myFunction"?',
        answers: ['myFuntion', 'call myFunction', 'call function my Function()'],
        correctAnswer: 'myFunction()'
     },
     {
        question: '6. How to write an IF statement in JavaScript?',
        answers: ['if (i == 5)', 'if i = 5 then', 'if i == 5 then', 'if i = 5'],
        correctAnswer: 'if (i == 5)'
     },
     {
        question: '7. How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: ['if (i!=5)', 'if i <> 5', 'if (i <> 5)', 'if i =! 5 then'],
        correctAnswer: 'if (i!= 5)'
     },
     {
        question: '8. How does a WHILE loop start?',
        answers: ['while (i <= 10)', 'while (i <= 10; i++)', 'while i = 1 to 10'],
        correctAnswer: 'while (i <= 10)'
     },
     {
        question: '9. How does a FOR loop start?',
        answers: ['for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)', 'for (i = 0; i <= 5)'],
        correctAnswer: 'for (i = 0; i <= 5; i++)'
     },
     {
        question: '10. What is the correct way to write a JavaScript array?',
        answers: ['var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"'],
        correctAnswer: 'var colors = ["red", "green", "blue"]'
     },

];