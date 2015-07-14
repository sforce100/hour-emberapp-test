import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  pinyin: DS.attr('string'),
  is_hot: DS.attr('boolean'),
  gaode_lat: DS.attr('string'),
  gaode_lng: DS.attr('string')
});
