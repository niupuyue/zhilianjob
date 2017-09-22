/**
 * Created by paul on 2017/9/22.
 */
angular.module("account.route", ["account.controller"])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs.account', {
      url: '/account',
      views:{
        'tab-account': {
          templateUrl: 'area/account/account.html',
          controller: 'AccountCtrl'
        }
      }
    })
});
