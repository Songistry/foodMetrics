(function() {
    'use strict';

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');
        $urlRouterProvider.when('/', '/home');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                templateUrl: 'src/core/navigation/pageTemplate.html'
            })
            .state('root.home', {
                url: 'home',
                templateUrl: 'src/home/home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            });
    }

	/* @ngInject */
    function run() {
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
