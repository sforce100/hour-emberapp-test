import DS from 'ember-data';

export default DS.Model.extend({
  regions: DS.attr(),
  subways: DS.attr(),
  landmarks: DS.attr()
});
