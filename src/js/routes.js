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
                templateUrl: 'templates/dashboard.html'
            })
          .state('addComputer', {
            url: '/addComputer',
            templateUrl: 'templates/addComputer.html'
          })
          .state('editComputer', {
            url: '/editComputer',
            templateUrl: 'templates/editComputer.html'
          });
    }
]);