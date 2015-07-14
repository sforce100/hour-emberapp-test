import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    console.log('city 1');
    // Ember.$.get('http://localhost:3000/api/v1/cities',
    //     function(data) {
    //       console.log('city 2');
    //       // location.reload();
    //       for (var i = 0; i < data['data'].length; i++) {
    //         store.createRecord('city', data['data'][i]);
    //       }
    //       // return store.find('city');
    //     },
    //     'json'
    //   ).fail(function() {
    //     alert("system error");
    //   });
    // console.log('city 3');

    // return this.container.lookup('application:main').HotelsCityAdapter.accept(); 
    return this.store.find('city');
  }
});
