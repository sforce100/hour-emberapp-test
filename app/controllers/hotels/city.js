import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  // searchOption2: Ember.computed.alias('controllers.application.searchOption'),
  // valueBinding: 'controllers.application.aaa',
  actions: {
    select: function (city) {
      // this.set('searchOption.city_name', city.name);
      // this.set('aaa2', city.name);
      // window.RujiaHotel.searchOption = {city_name: city.name};
      // console.log(city.get('name'));
      this.set('controllers.application.searchOption.city_name', city.get('name'));
      this.set('controllers.application.searchOption.city_code', city.get('id'));
      this.transitionTo('hotels.search');
    }
  }
});
