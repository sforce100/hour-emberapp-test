import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    console.log('route hotels list '+this.controllerFor('application').get('searchOption'));
    return this.store.find('hotel', this.controllerFor('application').get('searchOption'));
  }
});
