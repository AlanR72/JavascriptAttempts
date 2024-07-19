var subtotal;
var shipping;
var grandtotal;

subtotal = (13 + 1) * 5;
shipping = 0.5 * (13 + 1);
grandtotal = subtotal + shipping;

var elSub = document.getElementById('sub');
elSub.textContent = subtotal;


var elShip = document.getElementById('ship');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = grandtotal;


