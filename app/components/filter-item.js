import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-item'],
  classNameBindings: ['isSelected:selected-item'],
  store: undefined,
  appController: undefined,
  isSelected: false,
  actions: {
    selectFilter: function (filter, value) {
      var self = this;
      var currentElement = Ember.$(self.get('element'));
      console.log(self.get('element'));
      console.log(self.appController.searchOption);
      self.set('isSelected', true);
      self.appController.set("searchOption."+filter, value);
      var selectContent = currentElement.parent('.select-content');
      selectContent.find('.selected-item').removeClass('selected-item');
      currentElement.addClass('selected-item');
    }
  }
});
