// function button1Func() {
//     alert("File 1 Connected")
// }
// console.log(button1Func)

// I'm accessing the log method of my console object. I pass the method an argument
// in this case the argument is a string.
console.log('questions.js file has been read first');

// let timer;
// let count

const questions = [
    {
       question: 'Hello, how are you doing today? (test)', // I Just as well could have used double quotes
       answers: ['Great!', 'So-so', 'Meh', 'Fantastic'],
       correctAnswer: 'Fantastic'
    },
    {
        question: 'What day is today? (test', // I Just as well could have used double quotes
        answers: ['Great!', 'Sunday', "Meh', 'Fantastic"],
        correctAnswer: 'Sunday'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
        answers: ['document.getElement("p").innerHTML = "Hello World!"', '#document.innerHTML = "Hello World!"', 'document.getElementById("demo).innerHTML = "Hello World!"'],
        correctAnswer: 'document.getElementById("demo).innerHTML = "Hello World!"'

        // continue with my questions and possible answers
    }

];