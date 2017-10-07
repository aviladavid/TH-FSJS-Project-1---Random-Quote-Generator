/* Program that randomly selects a quote from an array and displays it to a web page.  */

// Array containing the object quotes to be displayed on the web page.
var quotes = [
    {
        quote: '"Live as if you were to die tomorrow. Learn as if you were to live forever."', // Text of the quote to be displayed on the page
        source: '-Mahatma Gandhi.', // Identifies the creator of the quote. Who said it?. 
        citation: ' ', // If known. Where the quote comes from (public speech, TV show, book, etc.)
        year: ' ', // If known.  
        tag: ' Life' // humor, business, politics, love, inspirational, etc
    },
    {
        quote: '"Don\'t cry because it\'s over. Smile because it happened."',
        source: '- Dr. Seuss',
        citation: ' ',
        year: ' ',
        tag: ' Life'
    },
    {
        quote: '“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”',
        source: '- Haruki Murakami',
        citation: ' Norwegian Wood (Novel), ',
        year: '(1987) ',
        tag: 'Wisdom'
    },
    {
        quote: '“The flower that blooms in adversity is the rarest and most beautiful of all.”',
        source: '― Walt Disney Company',
        citation: 'Mulan (Movie)',
        year: ' (1998) ',
        tag: 'Inspirational'
    },
    {
        quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        source: '― Albert Einstein',
        citation: '',
        year: '',
        tag: ' Science'
    },
    {
        quote: '“Success consists of going from failure to failure without loss of enthusiasm”',
        source: '― Winston Churchill',
        citation: '',
        year: '',
        tag: ' Motivational'
    },
    {
        quote: '"You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time"',
        source: '- Abraham Lincoln',
        citation: ' ',
        year: ' ',
        tag: ' Life'
    },
    {
        quote: '"You are ghost driving a meat-coated skeleton made from stardust, riding a rock, hurtling through space. Fear Nothing!"',
        source: '- Unknown',
        citation: ' ',
        year: ' ',
        tag: ' Epic internet stuff'
    }
];

var tempArray = []; // will temporarily hold the objects that will be used to pick a random quote
var quoteTimer; // Variable for the 30 sec timer on printQuote

// event listener to respond to "Show another quote" button clicks when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// event listener to change background color on button click for the selected DOM elements
var domElement1 = document.querySelector('body');
var domElement2 = document.querySelector('#loadQuote');
document.getElementById('loadQuote').addEventListener("click", () => {
    var newColor1 = colorChange();
    var newColor2 = colorChange();
    console.log("BODY BACKGROUND COLOR: " + newColor1);
    console.log("BUTTON BACKGROUND COLOR: " + newColor2);
    domElement1.style.backgroundColor = newColor1;
    domElement2.style.backgroundColor = newColor2;
    console.log("------END------");
});

// getRandomQuote selects random quote object from the quotes array and returns the randomly selected object. 
function getRandomQuote() {
    var selectedQuote;
    var randNum;
    if (tempArray.length > 0) {
        randNum = Math.floor(Math.random() * tempArray.length); // Random number between 0 and number of items in the tempArray.
        console.log("THE RANDOM NUMBER IS: " + randNum);
        selectedQuote = tempArray[randNum];
        console.log("A RANDOMLY SELECTED OBJECT HAS BEEN ASSIGNED TO THE VARIABLE selectedQuote ");
        console.log("THE OBJECT HELD BY selectedQuote IS:")
        console.log(selectedQuote);
        tempArray.splice(randNum, 1); // removes the object from the tempArray so that it won't come up again until the tempArray is repopulate
        console.log("OBJECT REMOVED FROM tempArray");
        console.log("NEW ARRAY LENGTH = " + tempArray.length);
    } else {
        tempArray = quotes.slice();
        console.log("CONTENTS OF 'quotes' HAVE BEEN COPIED TO tempArray");
        printQuote(); // Start over
    };
    return selectedQuote; 
};

/* printQuote does 4 things: 
1) Calls the getRandomQuote function and stores the returned random quote in a variable. 
2) It constructs a string containing the different properties of the quote object. 
3) Doesn't add object properties (year and citation) if they are missing from the object
4) Displays (prints) the final HTML to the page */
function printQuote() {
    var randomQuote = getRandomQuote(); // Variable to hold the random quote object pulled from the quotes array
    console.log("THE RANDOMLY SELECTED QUOTE IS: " + randomQuote.quote);
    var HTML = ''; // Variable to hold the constructed string that is to be to be displayed
    HTML += '<p class="quote">' + randomQuote.quote + '</p>';
    HTML += '<p class="source">' + randomQuote.source;
    if (randomQuote.citation){
        HTML += '<span class="citation">' + randomQuote.citation + '</span>';
    };
    if (randomQuote.year){ 
        HTML += '<span class="year">' + randomQuote['year'] + '</span></p>';
    };
    HTML += '<p class="tag">' + randomQuote['tag'] + '</p>';
    console.log('THE FOLLOWING HTML STRING HAS BEEN CONSTRUCTED: ' + HTML);
    document.getElementById('quote-box').innerHTML = HTML;

    window.clearTimeout(quoteTimer);
    quoteTimer = window.setInterval(printQuote, 30000);
};

// colorChange generates a random rgb color 
function colorChange() {
    var randValue;
    var randColor = 'rgb(';
    for (var i = 0; i < 3; i ++){
        randValue = Math.floor(Math.random() * 255);
        if (i !== 2){
            randColor += randValue + ',';
        } else {
            randColor += randValue + ')'
        }
    };
return randColor;
};





