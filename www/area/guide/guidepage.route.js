/**
 * Created by paul on 2017/9/22.
 */
angular.module('guidepage.route', ['guidepage.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guidepage', {
        url: '/guidepage',
        templateUrl: 'area/guide/guidepage.html',
        controller: 'GuidePageCtrl'
      })
  });
