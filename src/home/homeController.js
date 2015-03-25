(function() {
    'use strict';

    function ctrl() {
    	console.log('foo');
    }


    angular.module('foodMetrics')
        .controller('homeController', ctrl);

})();
