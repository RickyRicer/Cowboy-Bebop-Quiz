// Click start to present questions in succession
// Subtract time from the questions when an answer is wrong.
// Game is over when all ?s are answered or timer hits 0
// Save scores in local storage 
let startButton = document.getElementById('start');
let startDivEl = document.getElementById('start-div');
let questionsDivEl = document.getElementById('questions-div');
let optionsEl = document.getElementById('answer-choices')
let timeRemaingingEl = document.getElementById('timeremaining');
let quizTimerId; 
let quizTime = 90;


function startQuiz (){
  // Hide Start Button/Intro
  startDivEl.setAttribute('class','hide');
  startDivEl.style.display = 'none';
  questionsDivEl.removeAttribute('class');
  // Starts the timer
  quizTimerId = setInterval(secondHandler, 1000);
  timeRemaingingEl.innerHTML = quizTime;

  showQuestions();
  console.log('showQuestions');
};
//Starts the Quiz
startButton.onclick = startQuiz;

function showQuestions (){
  let currentQuestion = [0];
  for(let i = 0; i < currentQuestion.options.length; i++){
    
    let optionsButton = document.createElement("button");
    optionsButton.textContent = currentQuestion.options[i];

    optionsEl.appendChild(optionsButton)}
  }

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


function secondHandler(){
  quizTime--;
  timeRemaingingEl.innerHTML = quizTime;
  //tbd have code here for end quiz also
}







