/**
 * Created by paul on 2017/9/22.
 */
angular.module("resume.route", ["resume.controller"])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs.resume', {
      url: '/resume',
      views:{
        'tab-resume': {
          templateUrl: 'area/resume/resume.html',
          controller: 'ResumeCtrl'
        }
      }
    })
});
