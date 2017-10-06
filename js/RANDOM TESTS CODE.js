    var a = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];
    var b = [];

    function chooseName() {
    var unique = true;
    b.length = 5;
    num = Math.floor(Math.random() * a.length);
    name = a[num];    
        for (i = 0; i < a.length; i++) {
        if (b[i] == name) {
            chooseName();
            unique = false;
            break;
            }
        }
        if (unique == true) {
        alert(name);
        b.unshift(name);
        }
    }



    function getRandomQuote() {
    var selectedQuote;
    var randNum;
    if (tempArray.length < 1) {
        tempArray = quotes;
        console.log("tempArray has been set equal to quotes");
        // getRandomQuote();
    } else {
        randNum = Math.floor(Math.random() * tempArray.length); // Random number between 0 and number of items in the tempArray.
        selectedQuote = tempArray[randNum]; 
        console.log("the var selectedQuote has been set to: " + selectedQuote);
        tempArray.splice(randNum, 1); // removes the item from the tempArray
    };
    return selectedQuote; // object not being assigned properly to the variable
}

do {
    tempArray = quotes;
}
while (tempArray.length === 0 );

//  PRE MERGE 
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
    console.log('Random object selected from the quotes array:');
    console.log(randomQuote);
    var HTML = ''; // Variable to hold the constructed string that is to be to be displayed
    HTML += '<p class="quote">' + randomQuote['quote'] + '</p>';
    HTML += '<p class="source">' + randomQuote['source'];
    HTML += '<span class="citation">' + randomQuote['citation'] + '</span>';
    HTML += '<span class="year">' + randomQuote['year'] + '</span></p>';
    HTML += '<p class="tag">' + randomQuote['tag'] + '</p>';
    console.log('THE FOLLOWING HTML STRING HAS BEEN CONSTRUCTED: ' + HTML);
    document.getElementById('quote-box').innerHTML = HTML;
    // document.getElementsByClassName('container').backgroundColor(newColor);
    /*var newColor = colorChange();
    console.log("new color is " + newColor);
    var domElement = document.querySelector('container');
    domElement.style.backgroundColor = newColor;*/
    
}

// colorChange generates a random rgb color 
function colorChange() {
    var r = Math.floor(Math.random() * 255); // random number between 0 - 255
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var randColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    // console.log("The random RGB color is: " + randColor);
    return randColor;
}
