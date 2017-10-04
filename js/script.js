/* The app will need to display at least 5 quotes from an array of objects. Every quote object should have at least 3 properties, quote (text of the quote), source (who said it), citation (if known), date(if known) Our project will need two main functions: getRandomQuote () should select a random quote from the quotes array and return it. printQuote () which should call the getRandomQuote function and print the quote to the page using the template provided
We need to include comments in the code to explain what the code is doing Concentrate on getting the results rather than on whether the code is dry and perfect */

// Variables to hold the values to be printed to the web page once a random quote is selected
var quote = '';
var source = '';
var citation = '';
var year = '';
var tag = '';

// Array containing the object quotes to be displayed on the web-page.
var quotes = [
    {
        quote: '"Live as if you were to die tomorrow. Learn as if you were to live forever."', // Text of the quote to be displayed on the page
        source: '-Mahatma Gandhi.', // Identifies the creator of the quote. Who said it?. 
        citation: '', // If known. Where the quote comes from (public speech, TV show, book, etc.)
        year: '', // If known.  
        tag: 'life' // humor, business, politics, love, inspirational, etc
    },
    {
        quote: '"Don\'t cry because it\'s over. Smile because it happened."',
        source: '- Dr. Seuss.',
        citation: '',
        year: '',
        tag: 'life'
    },
    {
        quote: '“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”',
        source: '- Haruki Murakami',
        citation: 'Norwegian Wood (Novel).',
        year: '1987',
        tag: 'wisdom'
    },
    {
        quote: '“The flower that blooms in adversity is the rarest and most beautiful of all.”',
        source: '― Walt Disney Company',
        citation: 'Mulan (Movie)',
        year: '1998',
        tag: 'inspirational'
    },
    {
        quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        source: '― Albert Einstein',
        citation: '',
        year: '',
        tag: 'science'
    },
]

// event listener to respond to "Show another quote" button clicks when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function print (message) {
        var outputDiv = document.getElementById ('quote-box');
        outputDiv.innerHtml = message;
    }

// getRandomQuote selects random quote object from the quotes array and returns the randomly selected object. 
function getRandomQuote() {
    var randNum = Math.floor(Math.random() * quotes.length) + 1; // Random number between 0 and number of items in the quotes array.
    return quotes[randNum - 1]; // Returns the random object(quote data) from the array. -1 to account for the array's zero-index system
}

/* printQuote does 4 things: 
1) Calls the getRandomQuote function and stores the returned random quote in a variable. 
2) It constructs a string containing the different properties of the quote object. 
3) Doesn't add object properties (year and citation) if they are missing from the object
4) Displays (prints) the final HTML to the page */
function printQuote() {
    var randomQuote = getRandomQuote(); // Variable to hold the random quote object pulled from the quotes array
    console.log('Random object selected:');
    console.log(randomQuote);
    var HTML = ''; // Variable to hold the constructed string that is to be to be displayed
    for (objKey in randomQuote){ // Cycle through the object keys and assign their value to the global variables 
        console.log(randomQuote[objKey]);
        quote = randomQuote[quote];
        source = randomQuote[source];
        citation = randomQuote[citation];
        year = randomQuote[year];
        tag = randomQuote[tag];
    }
    // HTML += '<p class="quote">' + quote + '</p>';
    // print(HTML);
    console.log("This the variable quote " + quote);
}





