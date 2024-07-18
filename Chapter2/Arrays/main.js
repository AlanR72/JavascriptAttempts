/* var colors;
colors = ['white', 'black', 'custom'];

var el = document.getElementById("selection");
el.textContent = colors[0]; */

/* Alternatively  */
var colors = new Array('white',
                       'black', 
                       'custom');

/* Colors value can be changed by selecting array position */
colors[2] = 'beige';                       

var el = document.getElementById('selection');
el.textContent = colors[2];
