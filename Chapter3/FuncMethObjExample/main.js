/* Script is placed inside an immediately invoked function expression
which helps protect the scope of the variables*/
(function() {
     var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate; 
        }
    };

    var hotelName;
    var roomRate;
    var specialRate;

    hotelName = document.getElementById("hotelName");
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '£' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '£' + hotel.offerPrice();
    
}());
