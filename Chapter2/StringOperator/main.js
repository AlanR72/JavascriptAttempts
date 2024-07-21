var greeting = 'Hi, ';
var title = 'Alan';
var message = greeting + title + '!';

/* Selecting the div id updates the span also */
var el = document.getElementById('greeting');
el.textContent = message;