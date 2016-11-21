'use strict';

/**
 * Route configuration for the Cdb-Angular module.
 */
angular.module('Cdb-Angular').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html'
            })
          .state('addComputer', {
            url: '/addComputer',
            templateUrl: 'views/addComputer.html'
          })
          .state('editComputer', {
            url: '/editComputer',
            templateUrl: 'views/editComputer.html'
          });
    }
]);