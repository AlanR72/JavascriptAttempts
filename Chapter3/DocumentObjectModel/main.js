/*Properties of the Document object

document.title - Title of the current document
document.lastModified - Date the document was last modified
document.URL - Returns string containing URL of current document
document.domain - Returns domain of current document

Some methods of the DOM include:

document.write() - Writes text to the document
document.getElementById() - Returns element if one exists that matches
document.querySelectorAll() - Returns a list of elements that match a CSS selector,which is specified as a parameter
document.createElement() - Creates a new element
document.createTextNode() - Creates a new text node*/

var msg = "<p><b>page title: " + document.title + "<br />";
msg += "<b>page address: " + document.URL + "<br />";
msg += "<b>last modified: " + document.lastModified + "<br />";


var el = document.getElementById('footer');
el.innerHTML = msg;

