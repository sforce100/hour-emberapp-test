import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    sessionInvalidationSucceeded: function () {
      console.log('sessionInvalidationSucceeded');
      this.transitionTo('/hotels/search');
    },
    sessionAuthenticationSucceeded: function () {
      console.log('sessionAuthenticationSucceeded');
      this.transitionTo('/hotels/search');
    }
  }
});
