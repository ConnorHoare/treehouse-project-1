/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
  {
    source: "John Keats",
    quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else."
  },
  {
    source: "Ernest Hemingway",
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    citation: "The Old Man and The Sea",
    year: "1952",
    tags: "book"
  },
  {
    source: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on."
  },
  {
    source: "Heraclitus",
    quote: "There is nothing permanent except change."
  },
  {
    source: "Indira Gandhi",
    quote: "You cannot shake hands with a clenched fist."
  },
  {
    source: "A. P. J. Abdul Kalam",
    quote: "Let us sacrifice our today so that our children can have a better tomorrow."
  },
  {
    source: "Niccolo Machiavelli",
    quote: "It is better to be feared than loved, if you cannot be both."
  }
]



/***
 * `getRandomQuote` function
***/
// Generate random number
function randomQuoteGenerator() {
  let randInt = Math.floor(Math.random() * parseInt(quotes.length));
  return randInt
}

// randomColour function
function randomColor() {
  // rgb values are set between 0 and 255
  let randomNum1 = Math.floor(Math.random() * 256);
  let randomNum2 = Math.floor(Math.random() * 256);
  let randomNum3 = Math.floor(Math.random() * 256);

  // add rgb values together
  let bgColor = `rgb(${randomNum1},${randomNum2},${randomNum3})`;

  // add the rgb values to the body background
  document.body.style.background = bgColor;
}


/***
 * `printQuote` function
***/
function printQuote() {

  // Variable to store random number
  let randNum = randomQuoteGenerator()
  // Variable to store the quote
  let quote = quotes[randNum];


  // store quote author
  let author = quote.source;
  // store quote
  let sourceQuote = quote.quote;
  // Store citation
  let citation = quote.citation;
  // Store year
  let year = quote.year;
  // Store tags
  let tag = quote.tags;

  let output = `<p class='quote'> ${sourceQuote}`
  output += `<p class='source'> ${author}`

  // If citation exists in obj add to output using template
  if (citation) {
    output += `<span class='citation'> ${citation} </span>`
  }

  // If year exists in obj add to output using template
  if (year) {
    output += `<span class='year'> ${year} </span>`
  }

  // If tag exists in obj add to output
  if (tag) {
    output += `<span class='tags'> ${tag} </span>`
  }

  document.getElementById('quote-box').innerHTML = `${output}`;
}


// change quote and bgcolour on interval of 5 seconds
setInterval(function () {
  printQuote()
  randomColor()
}, 5000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", randomColor, false);
