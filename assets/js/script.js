// Click start to present questions in succession
// Subtract time from the questions when an answer is wrong.
// Game is over when all ?s are answered or timer hits 0
// Save scores in local storage 
let startButton = document.getElementById('start');
let startDivEl = document.getElementById('start-div');
let questionsDivEl = document.getElementById('questions-div');
let timeRemaingingEl = document.getElementById('timeremaining');
let quizTimerId; 
let quizTime = 120;

// questions array
// questions with answer choices.
// correct answer.










// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");
// var todos = [];
// // TODO: What is the purpose of this function?
// // Renders the todos to the page
// function renderTodos() {
//   // TODO: Describe the functionality of the following two lines of code.
//   // Sets the html inside of the ul to nothing
//   todoList.innerHTML = "";
//   // Sets the text of the todo html element to be the length of todos
//   todoCountSpan.textContent = todos.length;
//   // TODO: Describe the functionality of the following `for` loop.
//   // Loop through every todos array
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];
//     // create an html element the li and the button
//     // sets an attribute to the li and the button
//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);
//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";
//     // puts the button inside of the li
//     li.appendChild(button);
//     // appending the li to the ul
//     todoList.appendChild(li);
//   }
// }
// // TODO: What is the purpose of the following function?
// // Get the todos from localStorage
// // And then call the render to put to them on the page
// function init() {
//   // TODO: What is the purpose of the following line of code?
//   // Get the todos from localStorage and then turn it back into an array
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));
//   // TODO: Describe the functionality of the following `if` statement.
//   // Ensure that we did get something from localStorage
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }
//   // TODO: Describe the purpose of the following line of code.
//   // renders the todos and the count on the page
//   renderTodos();
// }
// function storeTodos() {
//   // TODO: Describe the purpose of the following line of code.
//   // takes the todos array, turns into a JSON string, and then saves it into localStorage under the key of "todos"
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// // TODO: Describe the purpose of the following line of code.
// // Add an event listener for the submit button
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   var todoText = todoInput.value.trim();
//   // TODO: Describe the functionality of the following `if` statement.
//   // ensure that the user puts something in the input
//   // if they put nothing, exit out of the function
//   if (todoText === "") {
//     return;
//   }
//  // TODO: Describe the purpose of the following lines of code.
//  //  Takes the text from the input and pushes it to the array
//   todos.push(todoText);
//   //  Sets the input form to nothing
//   todoInput.value = "";
//   // TODO: What will happen when the following functions are called?
//   // Calls storeTodos to save the todos array into localStorage as a JSON string
//   storeTodos();
//   // Gets the todos from lcoalStorage and renders them on the page
//   renderTodos();
// });
// // TODO: Describe the purpose of the following line of code.
// // Add an event listener to the whole ul
// todoList.addEventListener("click", function(event) {
//   //  This is the actual element that was clicked on
//   var element = event.target;
//   // TODO: Describe the functionality of the following `if` statement.
//   // We only want to run this code below,
//   // when the user clicks on an element that is a button inside of the todoList element
//   if (element.matches("button") === true) {
//     // this will give us a number
//     var index = element.parentElement.getAttribute("data-index");
//     // Removes an element from the array and modifies the original array
//     todos.splice(index, 1);
//     // TODO: What will happen when the following functions are called?
//     // Save the stores new saved todos in localStorage
//     storeTodos();
//     // Puts the todos on the page
//     renderTodos();
//   }
// });
// init();
function secondHandler(){
quizTime--;
timeRemaingingEl.innerHTML = quizTime;
//tbd have code here for end quiz also
}

function startQuiz (){
  console.log("startQuiz called");
 startDivEl.setAttribute('class','hide');
 startDivEl.style.display = 'none';
 questionsDivEl.removeAttribute('class');
 quizTimerId = setInterval(secondHandler, 1000);
 timeRemaingingEl.innerHTML = quizTime;
}
startButton.onclick = startQuiz;