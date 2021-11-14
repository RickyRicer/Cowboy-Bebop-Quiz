// Click start to present questions in succession
// Subtract time from the questions when an answer is wrong.
// Game is over when all ?s are answered or timer hits 0
// Save scores in local storage 
let startButton = document.getElementById('start');
let startDivEl = document.getElementById('start-div');
let questionsDivEl = document.getElementById('questions-div');
let optionsEl = document.getElementById('answer-choices')
let timeRemaingingEl = document.getElementById('timeremaining');
let highScoresEl = document.getElementById('high-score');
let submitBtn = document.getElementById('submit');

let currentQuestionIndex = 0;
let quizTimerId; 
let quizTime = 10;
//getting the correct value from an object object manipulation object properties
// CurrentQuestion variable and currentquestion index variable


function startQuiz (){
  // Hide Start Button/Intro
  startDivEl.setAttribute('class','hide');
  startDivEl.style.display = 'none';
  questionsDivEl.removeAttribute('class');
  // Starts the timer
  quizTimerId = setInterval(secondHandler, 1000);
  timeRemaingingEl.innerHTML = quizTime;

  showQuestions();

};
//Starts the Quiz
startButton.onclick = startQuiz;

// questions array
// questions with answer choices.
// correct answer.
const questions = [
{
  question: 'What is the name of the ship our bounty hunters are on?',
  options: ['swordfish', 'red tail', 'hammer head', 'bebop'],
  answer: 3,
  },
  {
    question: `Who is Spike's friend, turned enemy?`,
    options: ['Faye', 'Jet', 'Vicious', 'Mao'],
    answer: 2,
    },
    {
      question: `How does nearly every episode end?`,
      options: [`3...2...1... Let's Jam!`, `You're Gonna Carry That Weight`, `...See You Space Cowboy`, '...Bang'],
      answer: 2,
      },
      {
        question: 'Where does the series take place?',
        options: ['Earth', 'Mars', 'Outer Space...duh', 'The wild, wild west'],
        answer: 2,
        },
]

function showQuestions (){
  //Pulls a question from the array
  let currentQuestion = questions[currentQuestionIndex];
  //Current question
  questionsDivEl.children[0].textContent = currentQuestion.question;
  //For loop to go over question answers
  for(let i = 0; i < currentQuestion.options.length; i++){
    // Create a button for each option
    let optionsButton = document.createElement("button");
    optionsButton.textContent = currentQuestion.options[i];
    
    optionsEl.appendChild(optionsButton)};
    //Creates an event listener for each answer option
    optionsEl.children[0].addEventListener('click', function(event){
      questionChoice(optionsEl.children[0]);
    });
    optionsEl.children[1].addEventListener('click', function(event){
      questionChoice(optionsEl.children[1]);
    });
    optionsEl.children[2].addEventListener('click', function(event){
      questionChoice(optionsEl.children[2]);
    });
    optionsEl.children[3].addEventListener('click', function(event){
      questionChoice(optionsEl.children[3]);
    });
  }

  // Function to check if user selected right or wrong answers
  function questionChoice (answerChoice){
    if(answerChoice.textContent != questions[currentQuestionIndex].answer){
      quizTime -= 10;
    }
    currentQuestionIndex++;
      if(currentQuestionIndex === questions.length)
    quizStop();
      else
    showQuestions();
  }
  
  function secondHandler(){
    // Countdown
    quizTime--;
    timeRemaingingEl.innerHTML = quizTime;

    if(quizTime <= 0);

    quizStop();
  }
  
  
  function quizStop(){
    // stop the quiz time
    clearInterval(quizTime);
    timeRemaingingEl.textContent = quizTime;
  
    //show final page and score 
    let endDiv = document.getElementById('end-div');
    endDiv.setAttribute('class','');
    let finalScore = document.getElementById('final-score');
    finalScore.textContent = quizTime;
  
    //Hide Questions
    questionsDivEl.setAttribute('class', 'hide');
  
  }


  function saveHighscore() {

    // make sure value wasn't empty
    if(initials === ''){ 
      alert('You must enter your initials!');
      return;
    }
    else if(initials.length > 3){
      alert('You may only use 3 characters!');
      return;
    }
    else{
      let highScores;
    if(JSON.parse(localStorage.getItem('highscores')) != null)
      highscores = JSON.parse(window.localStorage.getItem('highscores'));
    else
      highscores = [];

    let newScore = {
      initials: initials,
      score: quizTime,
    };
    
    highscores.push(newScore);
    
    localStorage.setItem('highscores', JSON.stringify(highScores));
    
    location.href = 'hs.html';
 };
}

submitBtn.onclick = saveHighscore;




