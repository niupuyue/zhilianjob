/**
 * Created by paul on 2017/9/22.
 */
angular.module('welcome.controller', ['welcome.service'])
  .controller('WelcomeCtrl', function ($scope, $state,$ionicSlideBoxDelegate,WelcomePageFty) {
    //数据传递
    $scope.name = WelcomePageFty.getName();
    //在当前页面中显示我们需要执行的样式，并且，在最后一张引导页的时候跳转
    $scope.myActiveSlide = 0;//初始位置
    var index = $ionicSlideBoxDelegate.currentIndex();
    $scope.welcome_goto_guide = function () {
      $state.go("guidepage");
    }
  })
