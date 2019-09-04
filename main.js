// Global Variables
var sectionLeft = document.querySelector(".left__main--section");
var jsTitleInput = document.querySelector(".js__title--input");
var jsItemInput = document.querySelector(".js__item--input");
var jsPlusButton = document.querySelector(".js__plus--button");
var jsCardArea = document.querySelector(".js__card--area");
var jsListButton = document.querySelector(".js__list--button");

// Event Listener for left section, initiates insertTaskItem function upon click
sectionLeft.addEventListener('click', eventHandlerTopLeft);
jsListButton.addEventListener('click', makeTaskCard);

// Named function for eventListener
function eventHandlerTopLeft() {
  event.preventDefault();
  if (event.target.classList.contains("js__plus--button")) {
    insertLeftTaskItem();
  }
  if (event.target.classList.contains("js__delete--icon")) {
    deleteLeftTaskItem();
  }
}

// Function for dynamic generation of user Task Item values via new <p> element
function insertLeftTaskItem() {
  var taskItemValue = document.querySelector(".js__item--input").value;
  var newItemLeftSection = document.createElement("p");
    if (taskItemValue != "") {
      document.querySelector(".js__input--area").appendChild(newItemLeftSection);
      newItemLeftSection.classList.add("js__dynamic--insert");
      newItemLeftSection.innerHTML =
      `
      <img class="js__delete--icon" src="images/delete.svg" alt="Delete Icon for removing task item">
        <span>${taskItemValue}</span>
      `
    }
}

// Function for deleting dynamically generated Task Item from left section
function deleteLeftTaskItem() {
  var deleteIcon = document.querySelector('.delete-button');
  var removeTaskItem = document.querySelector('.js__dynamic--insert');
  removeTaskItem.remove();
  }

function makeTaskCard() {
  console.log('make task card!')
    jsCardArea.insertAdjacentHTML('afterbegin',
    `<container class="js__card--container">
      <section class="js__task--card">
        <h3 class="js__h3--card">${jsTitleInput.value}</h3>
        <div class="task__body--container">
          <div class="task__container">
            <img class="js__task--urgent icons" src="images/checkbox.svg" alt="Checkbox for completed tasks">
            <section class="task__item">${jsItemInput.value}</section>
          </div>
        </div>
          <div class="task__card--icon">
            <img class="js__task--urgent icon" src="images/urgent.svg" alt="Update urgency on card">
            <img class="js__task--delete icon" src="images/delete.svg" alt="Delete card">
          </div>
      </section>
     </container>`);
}
