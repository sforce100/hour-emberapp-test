import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('hotels', function () {
    this.route('search');
    this.route('city');
    this.route('region', {queryParams: ['city_code']});
    this.route('list');
    this.resource('filter', function () {
      this.route('date');
      this.route('brand');
      this.route('region');
    });
  });

});

Router.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('/hotels/search');
  }
});

export default Router;
