const jobsEndpoint = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
const postEndpoint = `https://hacker-news.firebaseio.com/v0/item`;

const cardGrid = document.querySelector(".grid");
let listingIds;

document.querySelector("button").addEventListener("click", loadMore);

initialLoad();

async function initialLoad() {
  listingIds = await getJobListings();
  populateCardGrid(9);
}

async function loadMore() {
  await populateCardGrid(6);
}

// Number -> Undefined
// Takes in a Number and populates the grid with cards filled with info
async function populateCardGrid(numCards) {
  for (let i = 0; i < numCards && i < listingIds.length; i++) {
    const jobId = listingIds.pop(i);
    const job = await getJobInfo(jobId);
    console.log(job);

    const card = createCard(job);
    cardGrid.append(card);
  }
}

// -> [Numbers]
// Fetches the latest job listings and returns an array of numbers
async function getJobListings() {
  const response = await fetch(`${jobsEndpoint}`);
  return response.json();
}

// Number -> Object
// Fetches an individual job listing
async function getJobInfo(jobId) {
  const response = await fetch(`${postEndpoint}/${jobId}.json`);
  return response.json();
}

// Object -> Element
// Takes a listing object and returns a card element
function createCard(listing) {
  const div = document.createElement("div");
  const date = new Date(listing.time * 1000);
  const title = listing.title.split(/\sis\s/i);
  const heading = title[0];
  const info = title[1];
  div.innerHTML = `<h2>${heading}</h2>
  <p>${info}</p>
  <p>${date.toDateString()}</p>`;
  return div;
}
