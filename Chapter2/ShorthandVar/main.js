var price = 5;
var quantity = 14;
var total = quantity * price;

/* Alternatively */
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

/* Or */
var price = 5, quantity = 14;
var total = price * quantity;

//Write total into the element with the id cost
var el = document.getElementById("cost");
el.textContent = '£' + total;