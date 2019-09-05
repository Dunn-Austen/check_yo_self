// Global Variables
var sectionLeft = document.querySelector(".left__main--section");
var jsTitleInput = document.querySelector(".js__title--input");
var jsItemInput = document.querySelector(".js__item--input");
var jsPlusButton = document.querySelector(".js__plus--button");
var jsCardArea = document.querySelector(".js__card--area");
var jsListButton = document.querySelector(".js__list--button");

// EventListeners
sectionLeft.addEventListener('click', eventHandlerTopLeft);
jsListButton.addEventListener('click', makeTaskCard);

// Functions
// Named function for left section eventListener
function eventHandlerTopLeft() {
  event.preventDefault();
  if (event.target.classList.contains("js__plus--button")) {
    insertLeftTaskItem();
  }
  if (event.target.classList.contains("js__delete--icon")) {
    deleteLeftTaskItem();
  }
}

// Function for hiding left section text upon click (To be replaced with dynamic content)
function hideQuotation() {
  document.getElementById('js__quotation--area').style.display = "none";
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

// Function for resetting Make Task List fields to empty upon generating card
function clearTaskFields() {
    var selectForm = document.querySelector(".left__main--form")
    selectForm.reset();
}

// Function for individually deleting dynamically generated Task Item from left section (per icon click)
function deleteLeftTaskItem() {
  var removeTaskItem = document.querySelector('.js__dynamic--insert');
  removeTaskItem.remove();
  }

// Function for automatically hiding ALL dynamically generated Tasks Items at once - Tied to Make List Button
function hideAllLeftTaskItems() {
  var allTaskItems = document.querySelectorAll('p.js__dynamic--insert');
  for (var i = 0; i < allTaskItems.length; i++) {
    allTaskItems[i].style.display = 'none';
  }
}

// Function for generating User Prompts (inspiring quotes) / Replaced upon btn click
function insertRandomQuote() {
  var grabQuotationArea = document.querySelector('#js__quotation--area')
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
  grabQuotationArea.innerHTML = inspiringQuotesArray[i];
};

// Alright guys, I chose this place in the code to invoke this function randomly.
// We want the function to run and show a random inspiring quote upon page load.
// Maybe I should locate it elsewhere?
insertRandomQuote();

// Function for generating to-do list cards, includes function to hide quotation
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
     hideQuotation();
     clearTaskFields();
     hideAllLeftTaskItems();
}
