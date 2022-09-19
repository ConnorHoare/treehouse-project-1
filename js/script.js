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
    author: "John Keats",
    quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else."
  },
  {
    author: "Ernest Hemingway",
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    citation: "The Old Man and The Sea",
    year: "1952"
  },
  {
    author: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on."
  },
  {
    author: "Heraclitus",
    quote: "There is nothing permanent except change."
  },
  {
    author: "Indira Gandhi",
    quote: "You cannot shake hands with a clenched fist."
  },
  {
    author: "A. P. J. Abdul Kalam",
    quote: "Let us sacrifice our today so that our children can have a better tomorrow."
  },
  {
    author: "Niccolo Machiavelli",
    quote: "It is better to be feared than loved, if you cannot be both."
  }
]



/***
 * `getRandomQuote` function
***/
function randomQuoteGenerator() {
  let randInt = Math.floor(Math.random() * parseInt(quotes.length) + 1);
  return randInt
}



/***
 * `printQuote` function
***/
function printQuote() {

  // Variable to store random number
  let randNum = randomQuoteGenerator()

  // store quote author and change inner html
  let author = document.querySelector('.source');
  author.innerHTML = quotes[randNum].author;
  // store quote and change inner html
  let quote = document.querySelector('.quote');
  quote.innerHTML = quotes[randNum].quote;
  // Get citation and year elements from html
  let citation = document.querySelector('.citation');
  let year = document.querySelector('.year');

  // If citation exists in obj change innerHTML to match else add empty string
  if (!quotes[randNum].citation) {
    citation.innerHTML = ""
  } else {
    citation.innerHTML = quotes[randNum].citation;
  }

  // If year exists in obj chnage innerHTML else apply empty string
  if (!quotes[randNum].year) {
    year.innerHTML = ""
  } else {
    year.innerHTML = quotes[randNum].year;
  }
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
