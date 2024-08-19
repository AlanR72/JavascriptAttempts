var greeting = 'Hi, ';
var title = 'Alan ';
var message = 'please check your order :';

var welcome = greeting + title + message;

var elWelcome = document.getElementById('message');
elWelcome.textContent = welcome;

var sign = '77 Garnock Street';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var eltotalTiles = document.getElementById('tiles');
eltotalTiles.textContent = tiles;

var elsubTotal = document.getElementById('subtotal');
elsubTotal.textContent = '$' + subTotal;

var elshipping = document.getElementById('shipping');
elshipping.textContent = '$' + shipping;

var total = document.getElementById('grandTotal')
total.textContent = '$' + grandTotal;
