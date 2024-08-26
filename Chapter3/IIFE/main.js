var area = {function() {
    var width = 3;
    var height = 5;
    return width * height;
}}();//Parentheses can be placed between the last curly braces

/* IIFE - Immediately Invoked Function Expression */
/* IIFE's are not given a name, instead are 
executed once as the interpreter comes across them.
The grouping operatore (first set of curly brackets)
are there to ensure interpreter treats it as an 
expression.
The final set of normal parentheses are there to call the 
function immediately. */

/*Anonymous functions and IIFE's are often used for
code that only has to run once amongst other uses. */

console.log(area)