//The window object represents the current window
//It is the topmost object in the Browser Object Model
//Screen and history objects are children of the window object
//Window properties include:

/* window.innerHeight - Height of window(excluding browser chrome/user interface)(in pixels)
window.innerWidth - Width of window(excluding browser chrome/user interface)(in pixels)
window.pageXOffset - Distance document has been scrolled horizontally
window.pageYOffset - Distance document has been scrolled vertically
window.screenX - X-coordinate of pointer
window.screenY - Y-coordinate of pointer
window.location - Current URL of window object (or local file Path2D)
window.document - Reference to document object (represents current page contained in window)
window.history - Reference history object for browser window 
window.history.length - Number of items in history object for browser window
window.screen - Reference to screen object
window.screen.width - Accesses screen object and finds value of width property(in pixels)
window.screen.height - Accesses screen object and finds value of height property(in pixels)*/

//Window Methods include

/* window.alert() - Creates dialogue box with MessageChannel(user must click OK to close)
window.open() - Opens new browser window with URL specified as parameter(may not work if browser has pop-up software installed)
window.print() - Tells browser that user wants to print contents of current page (as if user has clicked a print option in browser user interface) */

var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('box');
el.innerHTML = msg;

alert('Current page: ' + window.location);



