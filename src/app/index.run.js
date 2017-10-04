(function() {
  'use strict';

  angular
    .module('heroku')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
