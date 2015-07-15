import CustomAuthenticator from '../authenticators/custom';
import CustomAuthorizer from '../authorizers/custom';

export function initialize(container, application) {
  application.register('authenticator:custom', CustomAuthenticator);
  application.register('authorizer:custom', CustomAuthorizer);
  // var applicationRoute = container.lookup('route:application');
  // var session          = container.lookup('simple-auth-session:main');
  // // handle the session events
  // session.on('sessionAuthenticationSucceeded', function() {
  //   applicationRoute.transitionTo('/hotels/search');
  // });
  // Session.reopen({
  //   setCurrentUser: function () {
  //     var id = this.get("user_id");
  //     var self = this;

  //     if (!Ember.isEmpty(id)) {
  //       return container.lookup("store:main").find("user", id).then(function (user) {
  //         self.set("currentUser", user);
  //       });
  //     }
  //   }.observes("user_id")
  // });
}

export default {
  name:       'authentication',
  before:     'simple-auth',
  initialize: initialize
};
