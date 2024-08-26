
//Declaring a function that requires information
function getArea(width, height) {
    //Parameters are used like variables
    return width * height;
}
//Function called with values for parameters
console.log(getArea(3,5));

//You do not need to specify values when calling
//You can use variables shown below to get the same result
var wallWidth = 3;
var wallHeight = 5;
console.log(getArea(wallWidth,wallHeight));


