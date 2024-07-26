
//Declaring a function that requires information
function getArea(width, height) {
    //Parameters are used like variables
    return width * height;
}
//Function called with values for parameters
getArea(3,5);

//You do not need to specify values when calling
//You can use variables shown below to get the same result
var wallWidth = 3;
var wallHeight = 5;
getArea(wallWidth,wallHeight);
