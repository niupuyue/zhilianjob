/**
 * Created by paul on 2017/9/22.
 */
angular.module('welcome.service', [])
  .factory('WelcomePageFty', function() {
    var name = "腾科togogo";
    return {
      getName:function () {
        return name;
      }
    };
  });
