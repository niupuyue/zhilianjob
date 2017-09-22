/**
 * Created by paul on 2017/9/22.
 */
angular.module('tabs.route', ['tabs.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs',
        templateUrl: 'area/tabs/tabs.html',
        controller: 'TabsCtrl'
      })
  });
