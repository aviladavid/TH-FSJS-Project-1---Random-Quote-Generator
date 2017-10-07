/* TREEOUSE TECHDEGREE FULL STACK JAVASCRIPT - PROJECT 1 - RANDOM QUOTE GENERATOR

The program randomly selects a quote from the quotes.  */

let tempArray = []; // temporary copy of the quotes array
let quoteTimer; // Variable for the 30 sec timer on printQuote

// getRandomQuote selects random quote object from the quotes array and returns the randomly selected object. 
const getRandomQuote = () => {
    let selectedQuote;
    let randNum;
    if (tempArray.length > 0) {
        randNum = Math.floor(Math.random() * tempArray.length); // Random number between 0 and number of items in the tempArray.
        console.log("THE RANDOM NUMBER IS: " + randNum);
        selectedQuote = tempArray[randNum];
        console.log("A RANDOMLY SELECTED OBJECT HAS BEEN ASSIGNED TO THE VARIABLE selectedQuote ");
        console.log("THE OBJECT HELD BY selectedQuote IS:")
        console.log(selectedQuote);
        tempArray.splice(randNum, 1); // removes the object from the tempArray so that it won't come up again until the tempArray is repopulated
        console.log("OBJECT REMOVED FROM tempArray");
        console.log("NEW ARRAY LENGTH = " + tempArray.length);
    } else {
        tempArray = quotes.slice();
        console.log("CONTENTS OF 'quotes' HAVE BEEN COPIED TO tempArray");
        console.log(tempArray);
        printQuote(); // Start over
    };
    return selectedQuote; 
};

/* printQuote does 4 things: 
1) Calls the getRandomQuote function and stores the returned random quote in a variable. 
2) It constructs a string containing the different properties of the quote object. 
3) Doesn't add object properties (year and citation) if they are missing from the object
4) Displays (prints) the final HTML to the page */
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
    console.log('THE FOLLOWING HTML STRING HAS BEEN CONSTRUCTED: ' + HTML);
    document.getElementById('quote-box').innerHTML = HTML;

    window.clearTimeout(quoteTimer);
    quoteTimer = window.setInterval(printQuote, 30000);
};

// The function colorChange generates and returns a random RGB color
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

// event listener to respond to "Show another quote" button clicks when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// event listener to change background color on button click for the selected DOM elements
var domElement1 = document.querySelector('body');
var domElement2 = document.querySelector('#loadQuote');
document.getElementById('loadQuote').addEventListener("click", () => {
    let newColor = colorChange();
    console.log("BODY BACKGROUND COLOR: " + newColor);
    console.log("BUTTON BACKGROUND COLOR: " + newColor);
    domElement1.style.backgroundColor = newColor;
    domElement2.style.backgroundColor = newColor;
    console.log("------END------");
});



