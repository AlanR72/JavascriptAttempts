/* Script is placed inside an immediately invoked function expression
which helps protect the scope of the variables*/
(function() {
    //Part One:Create hotels object and write out offer details

    //Hotel object using object literal syntax
    var hotel = {
        name: 'Park',
        roomRate: 240, //amount in pounds
        discount: 15, //percentage discount
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate; 
        }
    };
    //Write out the hotel name, standard rate and special rate
    var hotelName;
    var roomRate;
    var specialRate;//Declare variables

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = '<p>Hello</p>';
    roomRate.textContent = '£' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '£' + hotel.offerPrice();
})