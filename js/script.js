/* TREEHOUSE TECHDEGREE FULL STACK JAVASCRIPT - PROJECT 1 - RANDOM QUOTE GENERATOR

                ****** AIMING FOR EXCEEDS EXPECTATIONS ******

WHAT THE PROGRAM DOES: On button click, it displays a random quote to the user and changes 
the background to a new random RGB color. After the first button click the quote is then 
automatically refreshed on its own every 30 seconds. 

HOW IT WORKS: The program copies the objects from the quotes array (found in quotes.js) into the 
tempArray. Every time a quote is randomly selected form the tempArray and assigned to the 
selectedQuote variable, the object is removed from the tempArray so that we can ensure that no 
quotes repeat until all quotes have been shown. An timer/interval has been set up so that after 
the first clicks on the button, the quotes will refresh every 30secs*/ 

let tempArray = []; // temporary copy of the quotes array
let quoteTimer; // Variable for the 30 sec timer on printQuote

// The function getRandomQuote selects a random object (a quote) from the quotes array and returns the randomly selected object. 
const getRandomQuote = () => {
    let selectedQuote;
    let randNum;
    if (tempArray.length > 0) {
        randNum = Math.floor(Math.random() * tempArray.length); // Random number between 0 and number of items in the tempArray.
        selectedQuote = tempArray[randNum];
        console.log("A RANDOMLY SELECTED OBJECT HAS BEEN ASSIGNED TO THE VARIABLE selectedQuote ");
        console.log("THE OBJECT HELD BY selectedQuote IS:")
        console.log(selectedQuote);
        tempArray.splice(randNum, 1); // removes the object from the tempArray so that it won't come up again until the tempArray is repopulated
        console.log("OBJECT REMOVED FROM tempArray");
        console.log("NEW ARRAY LENGTH = " + tempArray.length);
    } else {
        tempArray = quotes.slice(); // Copy contents of quotes to tempArray
        console.log("OBJECTS CONTAINED IN 'quotes' HAVE BEEN COPIED TO tempArray");
        console.log(tempArray);
        printQuote(); // Start over with a populated tempArray
    };
    return selectedQuote; 
};

/* The function printQuote does 5 things: 
    1) Calls the getRandomQuote function and stores the returned random quote in a variable. 
    2) It constructs a string containing the different properties of the quote object. 
    3) Doesn't add object properties (year and citation) if they are missing from the object.
    4) Displays (prints) the final HTML to the page.
    5) When it first runs, it activates the timer for the automatic quote change every 30sec */
const printQuote = () => {
    let tempQuoteObject = getRandomQuote(); // Variable to hold the random quote object pulled from the quotes array
    console.log("THE RANDOMLY SELECTED QUOTE IS: " + tempQuoteObject.quote);
    let HTML = ''; // Variable to hold the constructed string that is to be to be displayed
    HTML += '<p class="quote">' + tempQuoteObject.quote + '</p>';
    HTML += '<p class="source">' + tempQuoteObject.source;
    if (tempQuoteObject.citation){
        HTML += '<span class="citation">' + tempQuoteObject.citation + '</span>';
    };
    if (tempQuoteObject.year){ 
        HTML += '<span class="year">' + tempQuoteObject.year + '</span></p>';
    };
    HTML += '<p class="tag">' + tempQuoteObject.tag + '</p>';
    document.getElementById('quote-box').innerHTML = HTML;
    // Timer for changing the quote every 30sec
    window.clearTimeout(quoteTimer);
    quoteTimer = window.setInterval(printQuote, 30000);
};

// The function colorChange constructs a string that will generate a random RGB color for the selected DOM element.
const colorChange = () => {
    let randValue;
    let randColor = 'rgb(';
    for (var i = 0; i < 3; i ++){
        randValue = Math.floor(Math.random() * 255);
        if (i !== 2){
            randColor += randValue + ',';
        } else {
            randColor += randValue + ')'
        };
    };
return randColor;
};

// event listener to respond to clicks on the "Show another quote" button by calling the printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// event listener to respond to clicks on the "Show another quote" button by changing the background color for the selected DOM elements.
var domElement1 = document.querySelector('body');
var domElement2 = document.querySelector('#loadQuote');
document.getElementById('loadQuote').addEventListener("click", () => {
    let newColor = colorChange();
    console.log("BACKGROUND RGB COLOR: " + newColor);
    domElement1.style.backgroundColor = newColor;
    domElement2.style.backgroundColor = newColor;
    console.log("------END------");
});