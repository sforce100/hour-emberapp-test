import Ember from 'ember';

export default Ember.Controller.extend({
  searchOption: {
    city_code: '',
    city_name: '请选择',
    start_date: '',
    end_date: '',
    brand: '',
    lat: '',
    lng: '',
    filter: '',
    region: '',
    subway: '',
    landmark: ''
  },
  setCity: function (name) {
    this.searchOption.city_name = name;
  }
  // regionShow: Ember.observer('searchOption.region', function () {
  //   var _temp = this.searchOption.region + this.searchOption.subway + this.searchOption.landmark;
  //   console.log(_temp+'!!!!');
  //   if (_temp == '') {
  //     return '区域/商圈/地铁';
  //   }else{
  //     return _temp;
  //   }
  // })
});
