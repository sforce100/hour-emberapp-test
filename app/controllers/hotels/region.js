import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['city_code'],
  needs: ['application'],
  actions: {
    selectRegion: function (filter, name) {
      switch(filter){
        case 'region':
          this.set('controllers.application.searchOption.region', name);
          this.set('controllers.application.searchOption.subway', '');
          this.set('controllers.application.searchOption.landmark', '');
          break;
        case 'subway':
          this.set('controllers.application.searchOption.region', '');
          this.set('controllers.application.searchOption.subway', name);
          this.set('controllers.application.searchOption.landmark', '');
          break;
        case 'landmark':
          this.set('controllers.application.searchOption.region', '');
          this.set('controllers.application.searchOption.subway', '');
          this.set('controllers.application.searchOption.landmark', name);
          break;
      }
      this.transitionTo('hotels.search');
    }
  }
});
