let restaurant  = {

    name: "ASB",

    guest_capacity : 75,

    guest_count : 0,

    check_availablity: function (party_size) {
        return party_size <= (this.guest_capacity - this.guest_count)
    },

    seat_party : function (party_size) {
        if (party_size <=  (this.guest_capacity - this.guest_count)) {
            this.guest_count = this.guest_count + party_size
            return true
        }
        else {
            return false
        }
    },

    remove_party: function (removal_party_size) {
        return this.guest_count = this.guest_count - removal_party_size
    }

};

// we will create a method

restaurant.check_availablity(4);
restaurant.guest_count = 65
console.log(restaurant.seat_party(10));


console.log(restaurant.remove_party(10));
