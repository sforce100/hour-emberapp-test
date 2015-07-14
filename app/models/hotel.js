import DS from 'ember-data';

export default DS.Model.extend({
  hotel_code: DS.attr('string'),
  name: DS.attr('string'),
  tel: DS.attr('string'),
  address: DS.attr('string'),
  photo: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  region_name: DS.attr('string'),
  service: DS.attr('string'),
  brand: DS.attr('string'),
  ready: DS.attr('boolean'),
  amount: DS.attr('number'),
  price: DS.attr('number'),
  sum_avg: DS.attr('number'),
  distance: DS.attr('number')
});
