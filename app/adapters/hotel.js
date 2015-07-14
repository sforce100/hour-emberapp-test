import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  find: function(store, type, query) {
    console.log('adapter hotel');
    console.log('adapter hotel: '+this.buildURL(type.typeKey));
    console.log('adapter hotel query: '+Ember.$.param(query));

    var url = this.buildURL(type.typeKey), 
        proc = 'GET', 
        obj = { data: query },
        theFinalQuery = url + "?" + Ember.$.param(query);
    console.log(url); // this is the base url
    console.log(proc); // this is the procedure
    console.log(obj); // an object sent down to attach to the ajax request
    console.log(theFinalQuery); // what the query looks like
    // use the default rest adapter implementation
    return this._super(store, type, query);
  },
});
