import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  tokenEndpoint: 'http://localhost:3000/api/v1/session',
  restore(data) {
    // return Ember.RSVP.reject();
    return new Ember.RSVP.Promise(function(resolve, reject) {
      console.log('restore');
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    // return Ember.RSVP.reject();
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      console.log('authenticate');
      Ember.$.ajax({
        url:         _this.tokenEndpoint,
        type:        'POST',
        data:        JSON.stringify({ session: { identification: options.identification, password: options.password } }),
        contentType: 'application/json'
      }).then(function(response) {
        Ember.run(function() {
          console.log('authenticate resolve before '+response);
          resolve({ token: response.session.token, username: response.session.username });
        });
      }, function(xhr, status, error) {
        var response = JSON.parse(xhr.responseText);
        Ember.run(function() {
          console.log('authenticate reject before '+response);
          reject(response.error);
        });
      });
    });
  },

  invalidate(data) {
    // return Ember.RSVP.resolve();
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve) {
      console.log('invalidate');
      Ember.$.ajax({ url: _this.tokenEndpoint, type: 'DELETE' }).always(function() {
        resolve();
      });
    });
  }
});
