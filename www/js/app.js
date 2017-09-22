/**
 * 全局APP的主js页面，完成所有js的引入和规范
 *
 */
angular.module('jobApp', ['ionic', 'route', 'config', 'global'])

  .run(function ($ionicPlatform, $ionicPopup, $rootScope,$ionicHistory,$location) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
    $ionicPlatform.registerBackButtonAction(function (e) {
      //阻止默认的行为
      e.preventDefault();
      // 退出提示框
      function showConfirm() {
        var servicePopup = $ionicPopup.show({
          title: '提示',
          subTitle: '你确定要退出应用吗？',
          scope: $rootScope,
          buttons: [
            {
              text: '取消',
              type: 'button-clear button-assertive',
              onTap: function () {
                return 'cancel';
              }
            },
            {
              text: '确认',
              type: 'button-clear button-assertive border-left',
              onTap: function (e) {
                return 'active';
              }
            },
          ]
        });
        servicePopup.then(function (res) {
          if (res == 'active') {
            // 退出app
            ionic.Platform.exitApp();
          }
        });
      }

      // 判断当前路由是否为各个导航栏的首页，是的话则显示提示框
      if ($location.path() == '/jobs'
        || $location.path() == '/commun'
        || $location.path() == '/condition'
        || $location.path() == '/account'
        || $location.path() == '/resume') {
        showConfirm();
      } else if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
      } else {
        showConfirm();
      }
      return false;
    }, 101);

  })
