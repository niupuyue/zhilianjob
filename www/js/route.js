/**
 * guidepage.route:引导页面
 * welcome.route:欢迎页面
 * tabs.route:全局tabs切换页面
 * jobs.route:职位页面
 * commun.route:沟通页面
 * condition.route:动态页面
 * account.route:我的页面
 * resume.route:简历页面
 */

angular.module('route', [
  'guidepage.route',
  'welcome.route',
  'tabs.route',
  'jobs.route',
  'commun.route',
  'condition.route',
  'account.route',
  'resume.route',
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // 当没有匹配到合适的路由之后默然跳转的url地址，还有就是项目默认启动的url地址
    if (localStorage["isFirst"]) {
      $urlRouterProvider.otherwise('/welcome');
    }
    else {
      $urlRouterProvider.otherwise('/guide');
    }
  });
