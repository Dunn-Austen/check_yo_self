// Global Variables
var sectionLeft = document.querySelector(".left__main--section");
var jsTitleInput = document.querySelector(".js__title--input");
var jsItemInput = document.querySelector(".js__item--input");
var jsPlusButton = document.querySelector(".js__plus--button");
var jsCardArea = document.querySelector(".js__card--area");
var jsListButton = document.querySelector(".js__list--button");
var jstaskArea = document.querySelector(".js__task--area");
var clearBtn = document.querySelector('.js__clear--button');
var deleteArray = document.querySelectorAll('.js__dynamic--insert');
var taskContainer = document.querySelector('.task__container');
var taskItemContainer = document.querySelector('.task__item--container');
var tasksArray = [];
var todoListArray = [];
// Event Listener for left section, initiates insertTaskItem function upon click
sectionLeft.addEventListener('click', eventHandlerTopLeft);
jsListButton.addEventListener('click', finalFunction);
clearBtn.addEventListener('click', clear);
// Named function for eventListener
function eventHandlerTopLeft(event) {
  event.preventDefault();
  if (event.target.classList.contains("js__plus--button")) {
    insertLeftTaskItem();
  }
  if (event.target.classList.contains("js__delete--icon")) {
    deleteLeftTaskItem();
  }
  document.getElementById('itemInput').value = '';
}
// Function for dynamic generation of user Task Item values via new <p> element
function insertLeftTaskItem() {
  var taskItemValue = document.querySelector(".js__item--input").value;
  // var newItemLeftSection = document.createElement("ul");
    if (taskItemValue != "") {
      // document.querySelector(".js__task--area").appendChild(jstasktArea);
      // newItemLeftSection.classList.add("js__dynamic--insert");
      jstaskArea.insertAdjacentHTML('afterbegin',
      `<div class="left__task--container">
         <img class="js__delete--icon" src="images/delete.svg" alt="Delete Icon for removing task item">
         <p>${taskItemValue}</p>
       </div>
      `)
    }
}
// Function for deleting dynamically generated Task Item from left section
function deleteLeftTaskItem() {
  var deleteIcon = document.querySelector('.delete-button');
  var removeTaskItem = document.querySelector('.js__dynamic--insert');
  removeTaskItem.remove();
  }
  // Function to put tasks on card
function  newTodoList() {
  var title = jsTitleInput.value;
  var task = tasksArray;
  var todoList = new TodoList({
    id: Date.now(),
    title: title,
    taskList: task
  })
  todoListArray.push(todoList);
console.log(todoList);
  return todoList;
};
  function createTasks() {
    for (var i = 0; i < jstaskArea.children.length; i++) {
    var taskList = new Task({name: jstaskArea.children[i].innerText, id: Date.now()});
    tasksArray.push(taskList);
  }
    return tasksArray;
};
function makeTaskCard(checklist) {
  console.log(checklist.id);
    jsCardArea.insertAdjacentHTML('afterbegin',
    `<container class="js__card--container" id="task__list--${checklist.id}">
      <section class="js__task--card">
        <h3 class="task__h3--text"></h3>
        <div class="task__body--container">
          <div class="task__container">
            <ul class="task__item">
            </ul>
          </div>
        </div>
          <div class="task__card--icon">
            <img class="js__task--urgent icon" src="images/urgent.svg" alt="Update urgency on card">
            <img class="js__task--delete icon" src="images/delete.svg" alt="Delete card">
          </div>
      </section>
     </container>`);
insertTasks(checklist);
insertTitle(checklist);
}
function finalFunction(event) {
  event.preventDefault();
  var tasks = createTasks();
  var checkList = newTodoList(tasks);
  makeTaskCard(checkList);
}
function insertTasks(checklist) {
  checklist.taskList.forEach(function(item) {
  console.log(item);
  var taskCard = document.querySelector(`#task__list--${checklist.id}`);
  var taskListElement = taskCard.querySelector('.task__item');
  var listItem = document.createElement('li');
  for (var i = 0; i < 1; i++) {
    listItem.innerHTML = `<img class="js__task--urgent icons" src="images/checkbox.svg" alt="Checkbox for completed tasks">${item.task}`;
    taskListElement.appendChild(listItem);
    }
  })
}
  function insertTitle(checklist) {
   var taskCard = document.querySelector(`#task__list--${checklist.id}`);
   var sectionTextElement = taskCard.querySelector('.task__h3--text');
   sectionTextElement.innerHTML = `${checklist.title}`;
}
function clear() {
  document.querySelector('.left__main--form').reset();
  var deleteArray = document.querySelectorAll('.js__dynamic--insert');
  deleteArray.forEach()
}
function disableBtn() {
  if (document.querySelector('#itemInput').value.length != 0) {
    document.querySelector('.js__plus--button').disabled = false;
  } else if (document.querySelector('#itemInput').value.length == 0) {
    document.querySelector('.js__plus--button').disabled = true;
  } else return
};
function disableMakeListBtn() {
  if (document.querySelector('#itemInput').value.length != 0 &&
    document.querySelector('#itemTitle').value.length != 0) {
    document.querySelector('.js__list--button').disabled = false;
  } else if (document.querySelector('#itemInput').value.length == 0 &&
    document.querySelector('#itemTitle').value.length == 0) {
    document.querySelector('.js__list--button').disabled = true;
  } else return
}
function disableClearBtn() {

}
