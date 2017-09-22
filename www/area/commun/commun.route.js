/**
 * Created by paul on 2017/9/22.
 */
angular.module("commun.route", ["commun.controller"])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs.commun', {
      url: '/commun',
      views:{
        'tab-commun': {
          templateUrl: 'area/commun/commun.html',
          controller: 'CommunCtrl'
        }
      }
    })
});
