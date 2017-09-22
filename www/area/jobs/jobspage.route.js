/**
 * Created by paul on 2017/9/22.
 */
angular.module("jobs.route",['jobspage.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tabs.jobs', {
        url: '/jobs',
        views:{
          'tab-jobs': {
            templateUrl: 'area/jobs/jobspage.html',
            controller: 'JobsCtrl'
          }
        }
      })
  });
