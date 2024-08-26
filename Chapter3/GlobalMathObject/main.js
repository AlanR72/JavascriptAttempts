/* Math properties 

Math.PI returns approximately 3.14159265359*/

/* Math methods

Math.round() rounds number to nearest integer

Math.sqrt(n) returns square root of positive number,
eg Math.sqrt(9) returns 3

Math.ceil() rounds number up to nearest integer

Math.floor() rounds number down to nearest integer

Math.random() generates a random number between 0(inclusive) and 1(not inclusive)*/

var originalNumber = 10.6789;

/* By using the floor method and multiplying by 10 a number between 0 and 9 is generated
If you then add 1 it generates a number between 1 and 10*/
var randomNumber = Math.floor((Math.random() * 10) + 1);

var msg = '<h2>Original Number 10.6789</h2>';
msg += '<h2>Math.round(2)</h2><p>' + Math.round(originalNumber) + '</p>';
msg += '<h2>Math.sqrt()</h2><p>' + Math.sqrt(originalNumber) + '</p>';
msg += '<h2>Math.ceil()</h2><p>' + Math.ceil(originalNumber) + '</p>';
msg += '<h2>Math.floor()</h2><p>' + Math.floor(originalNumber) + '</p>';
msg += '<h2>Math.random()</h2><p>' + Math.random() + '</p>';

msg += '<h2>Random number 1-10</h2><p>' + randomNumber + '</p>'; 

var el = document.getElementById('box');
el.innerHTML = msg;



 
