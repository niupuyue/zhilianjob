/**
 * Created by paul on 2017/9/22.
 */
//欢迎页面路由
angular.module('welcome.route', ['welcome.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'area/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      })
  });
