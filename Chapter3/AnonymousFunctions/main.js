//Function Declaration
//Also Named function
//Function declarations can be called before declared
function area(width, height) {
    return width * height;
}

var size = area(3,5);

//Function Expression
//Expressions not processed before interpreter reaches it
//Cannot be called before discovered
area = function(width, height) {
    return width * height;
};

var size = area(3,5);

console.log(size)
