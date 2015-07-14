import DS from 'ember-data';

import ENV from 'rujia-hotel/config/environment';

export default DS.RESTAdapter.extend({
  headers:   {
    'Content-Type': 'application/json'
  },
  host:      ENV.API.Host,
  namespace: 'api/v1'
});