/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rujia-hotel',
    environment: environment,
    baseURL: '/perfix',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    API: {
      Host: 'http://localhost:3000'
    },
    // https://github.com/rwjblue/ember-cli-content-security-policy#options
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://localhost:4200",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:3000",
      'img-src': "'self' http://image-homeinn.b0.upaiyun.com",
      'style-src': "'self'",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
