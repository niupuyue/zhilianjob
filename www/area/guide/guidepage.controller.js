/**
 * Created by paul on 2017/9/22.
 */
angular.module("guidepage.controller", ["guidepage.service"])
  .controller("GuidePageCtrl", function ($scope, $timeout, $state) {

    setTimeout(function () {
      $state.go('tabs.jobs');
    }, 2000);

  })
