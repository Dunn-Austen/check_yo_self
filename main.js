// Global Variables
var sectionLeft = document.querySelector(".left__main--section");

// Event Listener for left section, initiates insertTaskItem function upon click
sectionLeft.addEventListener('click', eventHandlerTopLeft);

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
      <img class="js__delete--icon" src="images/dark-delete.svg" alt="Delete Icon for removing task item">
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
