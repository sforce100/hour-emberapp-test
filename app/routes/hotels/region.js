import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {city_code: 1000},
  model: function (params) {
    console.log(params.city_code);
    return this.store.find('region', params.city_code);
  }
});
