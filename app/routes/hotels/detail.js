import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    console.log(params.hotel_id);
    // return this.store.find('hotel', params.hotel_id);
    return Ember.RSVP.hash({
                hotel: this.store.find('hotel', params.hotel_id),
                room: this.store.find('room-type', params.hotel_id)
            });
  }
});
