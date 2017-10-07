# TH-FSJS-Project-1---Random-Quote-Generator
   
   TREEHOUSE TECHDEGREE FULL STACK JAVASCRIPT - PROJECT 1 - RANDOM QUOTE GENERATOR

                ****** AIMING FOR EXCEEDS EXPECTATIONS ******

WHAT THE PROGRAM DOES: On button click, it displays a random quote to the user and changes 
the background to a new random RGB color. After the first button click the quote is then 
automatically refreshed every 30 seconds. 

EXCEEDS ESPECTATIONS REQUIREMENTS:
    + Added the additional property 'category' to the objects in the quotes array.
    + The getRandomQuote function does not return a duplicate quote until all quotes have been returned once.
    + Added a timer so that quotes change automatically every 30 seconds.
    + Background color changes every time the quote changes.

HOW IT WORKS: The program copies the objects from the quotes array (found in quotes.js) into the 
tempArray. Every time a quote is randomly selected form the tempArray and assigned to the 
selectedQuote variable, the object is removed from the tempArray so that we can ensure that no 
quotes repeat until all quotes have been shown. An timer/interval has been set up so that after 
the first clicks on the button, the quotes will refresh every 30secs*/ 
