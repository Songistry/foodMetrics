(function() {
    'use strict';

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '/',
                templateUrl: 'src/core/navigation/pageTemplate.html'
            });
    }

	/* @ngInject */
    function run() {
    	console.log('running');
    }

    angular
        .module('foodMetrics', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate'
        ])
        .config(config)
        .run(run);
})();
