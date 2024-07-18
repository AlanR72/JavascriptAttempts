var title;
var message;

title = "Alan's Special Offers!";
/* Unable to get hyperlink to work within message! */
message = '<a href=\'sale.html\'> 25% Off !</a>';

var elTitle = document.getElementById('title');
var elNote = document.getElementById('note');

elTitle.textContent = title;
elNote.textContent = message;

