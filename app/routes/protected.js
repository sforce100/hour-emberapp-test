import Ember from 'ember';

export default Ember.Route.extend({
  // request some data from the server so that the authorizer authorizes that request
  model: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.get('/v1/data').then(function(response) {
        resolve(JSON.stringify(response));
      });
    });
  }
});
