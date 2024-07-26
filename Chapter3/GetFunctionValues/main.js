/* Function used to get a single value */

function calculateArea(width,height) {
    var area = width * height;
    return area;
}

var wallOne = calculateArea(3,5);
var wallTwo = calculateArea(5,10);

/* Function used to get multiple values */

function getSize(width,height,depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area,volume];
    return sizes;
}

/* Value in square brackets determines which
 code to run from sizes array */
var areaOne = getSize(3,5,6)[0];
var volumeOne = getSize(3,5,6)[1];

//areaOne returns 15 (3*5)
//volumeOne returns 90 (3*5*6)



