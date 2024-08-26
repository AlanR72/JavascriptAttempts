var saying = "Home Sweet Home";

/* length property returns number of characters in a string (some rarely used characters take up 2 spaces)
returns 16*/
console.log(saying.length);

/* toUpperCase method changes string to uppercase
returns HOME SWEET HOME*/
console.log(saying.toUpperCase());

/* toLowerCase() method changes string to lowercase
returns home sweet home*/
console.log(saying.toLowerCase());

/* charAt() method returns character at parameter value
returns o*/
console.log(saying.charAt(12));

/* indexOf() method returns the index number of the first time
a character or set of characters is found within the string
returns 7*/
console.log(saying.indexOf('ee'));

/* lastIndexOf() returns the index number of the last time a
character or set of characters is found within the string
returns 14*/
console.log(saying.lastIndexOf('e'));

/* subString() returns characters found between two index numbers where the character for the first index is
included and the character for the last index is not included
returns et hom */
console.log(saying.substring(8,14));

/* split() when a character is specified it splits the string each time it is found, 
then stores each individual part in an array
returns 'Home', 'Sweet', 'Home' */
console.log(saying.split(' '));

/* trim() removes whitespace from start and end of string
returns 'Home Sweet Home' */
console.log(saying.trim());

/* replace like find and replace, it takes one value that should be found, and another to replace it
(by default it replaces the first match it finds)
returns 'How Sweet Home' */
console.log(saying.replace('me', 'w'));

var msg = '<h2 id = "heading">Home Sweet Home</h2>';
msg += '<h2>length</h2><p>' + saying.length + '</p>';
msg += '<h2>toUpperCase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>toLowerCase</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>charAt(12)</h2><p>' + saying.charAt(12) + '</p>';
msg += '<h2>indexOf("ee")</h2><p>' + saying.indexOf('ee') + '</p>';
msg += '<h2>lastIndexOf("e")</h2><p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h2>subString(8, 14)</h2><p>' + saying.substring(8, 14) + '</p>';
msg += '<h2>split(" ")</h2><p>' + saying.split(' ') + '</p>';
msg += '<h2>trim()</h2><p>' + saying.trim() + '</p>';
msg += '<h2>replace(me, w)</h2><p>' + saying.replace('me','w') + '</p>';

el = document.getElementById('box');
el.innerHTML = msg;



