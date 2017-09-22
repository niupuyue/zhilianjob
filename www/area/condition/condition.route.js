/**
 * Created by paul on 2017/9/22.
 */
angular.module("condition.route", ["condition.controller"])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs.condition', {
      url: '/condition',
      views:{
        'tab-condition': {
          templateUrl: 'area/condition/condition.html',
          controller: 'ConditonCtrl'
        }
      }
    })
});
