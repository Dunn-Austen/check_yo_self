// Global Variables
var sectionLeft = document.querySelector(".left__main--section");

// EventListeners
sectionLeft.addEventListener('click', eventHandlerTopLeft);

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

// // Function for Hiding left section text upon click (To be replaced with dynamic content)
function hideQuotation() {
  document.getElementById("js__welcome--message").style.display = "none";
  document.getElementById('js__quotation--area').style.display = "none";
}

// Function for dynamic generation of user Task Item values via new <p> element
function insertLeftTaskItem() {
  var taskItemValue = document.querySelector(".js__item--input").value;
  var newItemLeftSection = document.createElement("p");
    if (taskItemValue != "") {
      hideQuotation();
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
  event.preventDefault();
};

insertRandomQuote();
