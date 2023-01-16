// function button2Func() {
//     alert("File 2 Connected")
// }

const startQuizBtn = document.getElementById('start');
const questionsBox = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');
const timeEl = document.getElementById('time');
const endScreen = document.getElementById('end-screen');
//const feedBack = document.getElementById('feedback');

//this is where I put my timer interval and the the 60 countdown. I did this last.
let currentIndex = 0
let timer;
let time = 60;

function setTimer(){
timer = setInterval(function(){
time--
timeEl.textContent = time;
if (time == 0){ 
    // endQuiz()
}

},1000)


}


function displayNextQuestion() {
   if(currentIndex===questions.length){
    endQuiz()
   }

    questionsBox.classList.remove('hide');
    
    console.log('click heard from displayNextQuestion');
    // set the title and choices to the questionsBox
    questionTitle.textContent = questions[currentIndex].question;
    // now assign the values of the choices to questionChoices
    for(let i = 0; i < questions[currentIndex].answers.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = questions[currentIndex].answers[i];
        questionChoices.append(btn);
    }
   
}
function checkAnswer(choiceAnswer){
// console.log(choiceAnswer)
if(choiceAnswer===questions[currentIndex].correctAnswer){
currentIndex++
// questionsBox.innerHTML=""
questionChoices.innerHTML=""
displayNextQuestion();
}
else{
      
    currentIndex++
    time-=5;
    // questionsBox.innerHTML=""
    
    questionChoices.innerHTML=""
    displayNextQuestion();

}

}
function endQuiz(){
    clearInterval(timer)
    questionsBox.style.display="none"
    endScreen.classList.remove("hide")
}
//add local storage here


// add event listeners to the very bottom of your page
startQuizBtn.addEventListener('click', function() {
    // hide the start button
    this.classList.add('hide');

    // run the displayNextQuestion function
    displayNextQuestion();
    setTimer()

})

questionChoices.addEventListener('click',()=>{
    let userChoice = this.event.target.textContent
    // console.log(userChoice)

    checkAnswer(userChoice)


})





