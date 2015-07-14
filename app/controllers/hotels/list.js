import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  page: 2,
  actions: {
    loadHotel: function () {
      var self = this;
      var _temp = self.get('controllers.application.searchOption');
      _temp.page = self.page;
      self.store.find('hotel', _temp).then(function (hotels) {
        self.get('model').addObjects(hotels);
        self.page += 1;
      });
    },
    selectFilter: function (modalID) {
      console.log('selectFilter');
      var self = this;
      self.page = 1;
      var _temp = self.get('controllers.application.searchOption');
      _temp.page = self.page;
      self.store.unloadAll('hotel');
      self.set('model', []);
      self.store.find('hotel', _temp).then(function (hotels) {
        self.get('model').addObjects(hotels);
        self.page += 1;
        console.log(Ember.$(modalID));
        Ember.$(modalID).modal('hide');
      });
    }
  }
});
