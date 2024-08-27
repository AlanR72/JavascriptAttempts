var hotel = {
    name: 'Quay',
    rooms: 30,
    booked: 15,
    checkAvailability: function(){
        return this.rooms - this.booked;

    }
};

var elName = document.getElementById('hotelName');
elName.innerHTML = hotel.name;

var elRooms = document.getElementById('roomsLeft');
elRooms.innerHTML = hotel.checkAvailability();

/*you can also access properties or methods using
square bracket syntax i.e
var elName = hotel['name'];
var elRooms = hotel['checkAvailability'](); */