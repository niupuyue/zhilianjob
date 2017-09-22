/**
 * Created by paul on 2017/9/22.
 */
angular.module('jobspage.controller',['jobspage.service'])
  .controller('JobsCtrl',function ($scope) {

    $scope.images = [
      "../../img/1.jpg",
      "../../img/2.jpg",
      "../../img/3.jpg"
    ];

    //进行网络请求
    $scope.content1 = {
      img:"",
      name:"校园招聘",
      desc:"大学生求职专属"
    };
    $scope.content2 = {
      img:"",
      name:"面试直通车",
      desc:"直接与企业约面试"
    };
    $scope.jobs = [];


  })
