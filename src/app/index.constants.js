/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('heroku')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
