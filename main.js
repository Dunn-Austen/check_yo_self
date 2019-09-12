// Global Variables
var clearBtn = document.querySelector('.js__clear--button');
var deleteArray = document.querySelectorAll('.js__dynamic--insert');
var jsCardArea = document.querySelector(".js__card--area");
var jsInspireTask = document.querySelector('.js__inspire--task');
var jsItemInput = document.querySelector(".js__item--input");
var jsListButton = document.querySelector(".js__list--button");
var jsPlusButton = document.querySelector(".js__plus--button");
var jstaskArea = document.querySelector(".js__task--area");
var jsTitleInput = document.querySelector(".js__title--input");
var sectionLeft = document.querySelector(".left__main--section");
var taskContainer = document.querySelector('.task__container');
var taskItemContainer = document.querySelector('.task__item--container');
var jsTaskUrgent = document.querySelector('.js__task--urgent');
var jsTaskComplete = document.querySelector('.js__task--complete');
var tasksArray = [];
var todoListArray = [];

window.addEventListener("load", reInstantiate);
sectionLeft.addEventListener('click', eventHandlerTopLeft);
jsListButton.addEventListener('click', finalFunction);
jsCardArea.addEventListener('click', deleteCard);
clearBtn.addEventListener('click', clear);

function eventHandlerTopLeft(e) {
  e.preventDefault();
  if (e.target.classList.contains("js__plus--button") || e.target.classList.contains("js__plus--img")) {
    insertLeftTaskItem();
  }
  if (e.target.classList.contains("js__delete--icon")) {
    deleteLeftTaskItem();
  }
  document.getElementById('itemInput').value = '';
}

function insertLeftTaskItem() {
  var taskItemValue = document.querySelector(".js__item--input").value;
    if (taskItemValue != "") {
      jstaskArea.insertAdjacentHTML('beforeend',
      `<div class="left__task--container">
         <img class="js__delete--icon" src="images/delete.svg" alt="Delete Icon for removing task item">
         <p>${taskItemValue}</p>
       </div>
      `)
    }
}

function deleteLeftTaskItem() {
  var deleteIcon = document.querySelector('.delete-button');
  var removeTaskItem = document.querySelector('.left__task--container');
  removeTaskItem.remove();
  }

function  newTodoList() {
  var id = Date.now();
  var title = jsTitleInput.value;
  var task = tasksArray;
  var todoList = new TodoList({
  id: id += todoListArray.length,
  title: title,
  tasks: task
  })
  todoListArray.push(todoList);
  return todoList;
};

function createTasks() {
  var id = Date.now();
    for (var i = 0; i < jstaskArea.children.length; i++) {
    var taskList = new Task({id: id++, task: jstaskArea.children[i].innerText, complete: false});
    tasksArray.push(taskList);
  }
    return tasksArray;
};

function makeTaskCard(checklist) {
  console.log(checklist.id);
    jsCardArea.insertAdjacentHTML('beforeend',
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
            <img class="js__task--urgent icon bolt" src="images/urgent.svg" alt="Update urgency on card">
            <img class="js__task--delete icon" src="images/delete.svg" alt="Delete card">
          </div>
      </section>
     </container>`);
insertTasks(checklist);
insertTitle(checklist);
hideLeftDynamics();
clear();
}

function finalFunction(e) {
  e.preventDefault();
  var tasks = createTasks();
  var checkList = newTodoList(tasks);
}

function insertTasks(checklist) {
  checklist.tasks.forEach(function(item) {
  console.log(item);
  var taskCard = document.querySelector(`#task__list--${checklist.id}`);
  var taskListElement = taskCard.querySelector('.task__item');
  var listItem = document.createElement('li');
  for (var i = 0; i < 1; i++) {
    listItem.innerHTML = `<img class="js__task--complete icons" src="images/checkbox.svg" alt="Checkbox for completed tasks" data-id=${checklist.id}>${item.task}`;
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
  jstaskArea.innerHTML = '';
  tasksArray = [];
  disableBtns();
}

function disableItemBtn() {
  if (document.querySelector('#itemInput').value.length != 0) {
    jsPlusButton.disabled = false;
  } else if (document.querySelector('#itemInput').value.length == 0) {
    jsPlusButton.disabled = true;
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
  if(document.querySelector('#itemInput').value.length != 0 ||
    document.querySelector('#itemTitle').value.length != 0) {
    clearBtn.disabled = false;
  } else if(document.querySelector('#itemTitle').value.length == 0 &&
    document.querySelector('#itemInput').value.length == 0 || document.querySelector('#itemTitle').value.length == 0) {
    clearBtn.disabled = true;
  } else return;
};

function disableBtns() {
  disableMakeListBtn();
  disableClearBtn();
  disableItemBtn();
}

function deleteCard(e){
  if (e.target.classList.contains("js__task--delete")) {
  e.target.parentNode.parentNode.remove();
  todoListArray.pop();
  hideLeftDynamics();
  insertRandomQuotation();
 } else if (e.target.classList.contains("js__task--complete")) {
  findCardId(e);
   e.target.src = "images/checkbox-active.svg";
 }
}

function hideLeftDynamics() {
  if (todoListArray.length > 0) {
    jsInspireTask.style.display = 'none';
  } else {
    jsInspireTask.style.display = 'block';
  }
}

function insertRandomQuotation() {
  var inspiringQuotesArray = [
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
  ];
  i = Math.floor(Math.random() * 10)
  jsInspireTask.innerHTML = inspiringQuotesArray[i];
};

function reInstantiate() {
insertRandomQuotation();
}

  function findCardId(e) {
    var cardID = e.target.closest(".js__task--complete").getAttribute('data-id');
    console.log(cardID);
  }
