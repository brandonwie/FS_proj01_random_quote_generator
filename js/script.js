const quoteBox = document.querySelector("#quote-box");

const quotes = [
  {
    tag: "Life",
    quote:
      "You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.",
    source: "R. Williams",
    citation: "Goodwill Hunting",
    year: "1997"
  },
  {
    tag: "Motivation",
    quote: "Do, or do not. There is no 'try'.",
    source: "Yoda",
    citation: "Star Wars: The Empire Strikes Back",
    year: "1980"
  },
  {
    tag: "Wisdom",
    quote:
      "A wise man can learn more from his enemies than a fool from his friends.",
    source: "Niki Lauda",
    citation: "Rush",
    year: "2013"
  },
  {
    tag: "Motivation",
    quote: "It's what you do right now that makes a difference.",
    source: "Struecker",
    citation: "Black Hawk Down",
    year: "2002"
  },
  {
    tag: "",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    citation: "",
    year: ""
  },
  {
    tag: "Life",
    quote:
      "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of life.",
    source: "Walter Mitty",
    citation: "The Secret Life of Walter Mitty",
    year: ""
  },
  {
    tag: "",
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "",
    year: ""
  },
  {
    tag: "",
    quote:
      "Don't ever let somebody tell you, you can't do something. Not even me. Alight?",
    source: "Chris Gardner",
    citation: "Pursuit Happiness",
    year: "2008"
  },
  {
    tag: "Wisdom",
    quote:
      "Only if you find peace within yourself will you find true connection with others",
    source: "Jesse Wallace",
    citation: "Before Sunrise",
    year: "1995"
  }
];
// Return a random quote from an array
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Random Background Color
function randomBgColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${red},${green},${blue})`;
  document.querySelector(".bgcolor").style.backgroundColor = `${bgColor}`;
  document.querySelector("#loadQuote").style.backgroundColor = `${bgColor}`;
}

// Print out a random quote + background color
function printQuote() {
  const randomQuote = getRandomQuote();
  let HTMLstring = "";
  const rdTag = randomQuote.tag;
  const rdQuote = randomQuote.quote;
  const rdSource = randomQuote.source;
  const rdCitation = randomQuote.citation;
  const rdYear = randomQuote.year;
  // IF statement for 'Tag'
  if (rdTag !== "") {
    HTMLstring += `<p class="tag">Category: ${rdTag}</p>`;
  }
  // Add 'Quote' and 'Source', but the closing 'p' tag for 'Source' is at the bottom of this function
  HTMLstring += `<p class="quote">${rdQuote}</p><p class="source">${rdSource}`;
  // IF statement for 'Citation'
  if (rdCitation !== "") {
    HTMLstring += `<span class="citation">${rdCitation}</span>`;
  }
  // IF statement for 'Year'
  if (rdYear !== "") {
    HTMLstring += `<span class="year">${rdYear}</span>`;
  }
  // The closing 'p' tag for the 'Source' paragraph
  HTMLstring += "</p>";

  quoteBox.innerHTML = HTMLstring;
  // Change background color to a random one
  randomBgColor();
}

// Every 20s after the page is loaded, it'll show another random quote
window.onload = () => {
  setInterval(printQuote, 20000);
};
// The click event-listener given
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
