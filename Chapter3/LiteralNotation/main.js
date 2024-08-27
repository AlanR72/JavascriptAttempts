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