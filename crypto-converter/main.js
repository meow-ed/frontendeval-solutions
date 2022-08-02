const baseURL = `https://api.frontendeval.com/fake/crypto`;
let previousResult;

document.querySelector("select").addEventListener("change", handleInput);
document.querySelector("input").addEventListener("keyup", handleInput);

// Query and update every 10 seconds automatically
setInterval(() => {
  convertThenDisplay();
}, 10000);

// Event -> Undefined
// Handles user input: if the event type is 'keyup', the conversion will be
// debounced for 500ms then run. Otherwise, the conversion will run as normal
async function handleInput(event) {
  if (event.type === "keyup") {
    const debounced = debounce(() => convertThenDisplay(), 500);
    debounced();
    return;
  }
  convertThenDisplay();
}

// Function, Number -> Function
// Prevent user from calling a function too quickly
function debounce(callback, interval) {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, interval);
  };
}

// Get the values from the user, do the conversion, display the results and
// update the previousResult for the next query
async function convertThenDisplay() {
  const amount = document.querySelector("input").value;
  const currency = document.querySelector("select").value;

  const rate = await getConversionRate(currency);
  const result = (amount * rate).toFixed(2);

  const resultString = getResultString(result);
  changeDisplay("p", resultString);

  previousResult = result;
}

// String -> Number
// Takes in a currency abbreviation and returns the conversion rate
async function getConversionRate(currency) {
  const response = await fetch(`${baseURL}/${currency}`);
  const rateObj = await response.json();
  return rateObj.value;
}

// Number -> String
// Returns a string containing only the result if there is no previous,
// otherwise returns a string with the result and the amount change

// console.assert(getResultString(0) == `0`);
// console.assert(getResultString(-32) == `-32`);

function getResultString(result) {
  if (!previousResult) return `${result}`;

  const difference = (result - previousResult).toFixed(2);
  const span = getChangeString(difference);
  return `${result} ${span}`;
}

// Number -> String
// Returns a span with a green class if change is positive, and red if negative

// console.assert(getChangeString(0) == `<span class="red">down 0</span>`);
// console.assert(getChangeString(27) == `<span class="green">up 27</span>`);
// console.assert(getChangeString(-100) == `<span class="red">down 100</span>`);

function getChangeString(change) {
  const color = change > 0 ? "green" : "red";
  const arrow = change > 0 ? "up" : "down";
  return `<span class="${color}">${arrow} ${Math.abs(+change)}</span>`;
}

// String, String -> Undefined
// Takes an HTML selector and HTML markup and displays it inside the selected
// element
function changeDisplay(selector, markup) {
  document.querySelector(`${selector}`).innerHTML = markup;
}
