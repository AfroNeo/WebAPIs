# Module 6 Challenge Web APIs: Code Quiz
What I did to begin:
I have written my questions for the Code Quiz and I have put them into an Array on the questions.js page.
I first checked that the page was linked correctly with my HTML page by using console.log and viwing in the HTML Live Server and inspecting webpage then navigating to console.

On the 'questions.js page' I used 'const' (short for constant) which is usually applied to a data type indictating that the data is read-only.
I used the word 'question' as my property and set my questions, answers and correct answers into an array like this:

const questions = [
{
    questions:      'What coding language do you currently use to write your code?',
    answers:        ['python', 'javaScript,'],
    correctAnswer:  'javaScript'
},
];

logic.js page:
Then I moved on to the logic.js page where I linked the Id tags of the HTML page to the logic.js page by simply adding:

const startQuizBtn = document.getElementById('start');

This allowed me to turn the HTML id tags into JavaScript interactive functionality buttons. 
I needed to do this for, 'start', 'questions', 'question-titles', 'choice', 'time', 'end-screen', 'feedback'

*id feedback I have commented out for now. Need to make it functional!

After linking all the HTML id tags to my logic script page like the example above I then created functions.

startQuizBtn:
I need the startQuizBtn 'start' to be assigned to an eventListener on click as a function to run the list of questions I had in an Array, like so:

startQuizBtn.addEventListener('click', function() {
    
    this.classList.add('hide');

    questionChoices.innerHTML=""
    displayNextQuestion();

}

The start button was to be hidden after it was clicked and the question choices would appear accessed in the innerHTML (questions.js if I may, because it is a read-data only). Then, I input a displayNextQuestion(); within the function block to display the next question and possible answers on the next click.

questionsBox:
I used the id 'questions' and had to make sure the questionbox included the question list, hence classList and had to hide  the previous and next question so only the current question would show. example:

questionsBox.classList.remove('hide');
This was implemented after:

function displayNextQuestion(){
    if(currentIndex===questions.length){

    }
(but within the function block, here...)

}

I included QuestionsBox.style.display="none"
in the function endQuiz(){

}
Where I included a function to clear the time interval
clearInterval(timer)

endScreen.classList.remove("hide")
*I will look at this in more detail for the High Scores and Summary feedback of ending the Quiz.


QuestionTitle:
I set the title and choices to the questionBox. For example:
questionTitle.textContent = questions[currentIndex].question;

questionChoices:
I needed to append the button of the questionChoices.append(btn) straight after the 'for loop' like so.
This inserts a set of Node objects or string objects 'such as my questions' after the last child of the Element.
I then had to get the inner.HTML="" (empty strings) under the 'function checkAnswer(choiceAnswer)' within the 'if' and 'else'.
I also, added:
 questionChoices.addEventListener('click'),()=>{

}
This is a cleaner way of writing my code.


timeEL:
I used the timeEL.textContent = time under the: function setTimer(){

}
This allowed me to use the timer with an if statement, if the (time == 0){

}
End the Quiz.
},1000) (represents milliseconds)

}

endScreen:
was implemented under the function endQuiz being the last fucntional operator after clearInterval, and questionBox, I had:
endScreen.classList.remove("hide")

This ultimately ends the quiz after the user reaches the end.

*I will look at the 'hide' to change to "none"....

local storage:
*I need to implemeent a local storage function to record scores.

What next:
*I need to link the highscores.html with the the logic.js page
*I need to console.log and test the function.

**Note this homework challenge is incomplete and requires more time






