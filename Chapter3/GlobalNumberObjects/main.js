/* isNaN() checks if the value is not a number */

/* toFixed() rounds to a specified number of
decimal places (returns a string)*/

/* toPrecision() rounds to total number of places
(returns a string)*/

/* toExponential() returns a string representing the 
number in expotential notation*/

var originalNumber = 10.23456;

var msg = '<h2>Original Number 10.23456</h2>'
msg += '<h2>toFixed(3)</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>toPrecision(3)</h2><p>' + originalNumber.toPrecision(3) + '</p>';
msg += '<h2>toExponential</h2><p>' + originalNumber.toExponential(2) + '</p>';

var el = document.getElementById('box');
el.innerHTML = msg;



