const inputs = document.querySelectorAll("input");

inputs.forEach((input) => input.addEventListener("keyup", handleInput));

function handleInput(event) {
  const currentField = event.target;

  if (event.key === "Backspace" && currentField.id !== "input1") {
    document.querySelector(`#${currentField.id}`).innerHTML = "";
    focusNext(currentField, -1);
  } else if (event.key !== "Backspace") {
    focusNext(currentField, 1);
  }
}

// Object, Number -> Undefined
// Takes an HTML element object and a positive or negative number which
// determines how many elements the focus will move; negative number used
// to move backward
function focusNext(element, change) {
  const selector = element.nodeName.toLowerCase();
  const id = element.id;
  // Get the number off the end of the id
  const idNum = Number(id[id.length - 1]);

  const nextId = `${selector}${idNum + change}`;
  document.querySelector(`#${nextId}`).focus();
}

document.querySelector(".submit").addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  const code = [...inputs.values()].reduce((acc, c) => acc + c.value, "");
  if (code.length < 4) console.log("please enter all values");
  submitCode(code);
}

// String -> Undefined
// Takes in a four-digit code and compares it to the correct code
function submitCode(code) {
  const correctCode = "8910";
  if (code === correctCode) {
    console.log("logged in");
  } else {
    console.log("incorrect code");
  }
}

async function showError(message) {
  setTimeout(() => {
    document.querySelector("form").insertBefore(createErrorElement(message));
  }, 5000);
}

function createErrorElement(message) {
  const element = document.createElement("p");
  return element.textContent(message);
}
