// Karma configuration

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  //
  // Dependencies
  'app/bower_components/modernizr/modernizr.js',
  'app/bower_components/jquery/jquery.js',
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-resource/angular-resource.js',
  'app/bower_components/angular-cookies/angular-cookies.js',
  'app/bower_components/angular-sanitize/angular-sanitize.js',
  'app/bower_components/restangular/dist/restangular.js',
  'app/bower_components/es5-shim/es5-shim.js',
  'app/bower_components/jquery/jquery.js',
  'app/bower_components/json3/lib/json3.js',
  'app/bower_components/lodash/lodash.js',
  'app/scripts/modernizr-custom.min.js',
  'app/scripts/lib/gumby.js',
  // Our code
  'app/scripts/main.js',
  'app/scripts/apps/admin-app.js',
  'app/scripts/services/*.js',
  'app/scripts/controllers/*.js',
  'app/scripts/filters/*.js',
  'app/scripts/directives/*.js',
  // Test stuff
  'app/bower_components/angular-mocks/angular-mocks.js',
  'test/mock/**/*.js',
  'test/spec/**/*.js'
];

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress'];

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
