# Module 6 Challenge Web APIs: Code Quiz
What I did to begin:
I have written my questions for the Code Quiz and I have put them into an Array on the questions.js page.
I first checked that the page was linked correctly with my HTML page by using console.log and viwing in the HTML Live Server and inspecting webpage then navigating to console.

I used 'const' (short for constant) which is usually applied to a data type indictating that the data is read-only.
I used the word 'question' as my property and set my questions, answers and correct answers into an array like this:

const questions = [
{
    questions:      'What coding language do you currently use to write your code?',
    answers:        ['python', 'javaScript,'],
    correctAnswer:  'javaScript
},
];

Moved on to logic.js page:
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




