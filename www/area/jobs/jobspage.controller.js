/**
 * Created by paul on 2017/9/22.
 */
angular.module('jobspage.controller',['jobspage.service'])
  .controller('JobsCtrl',function ($scope,$window) {

    headerChangeColor();

    /*监听页面激活事件*/
    $scope.$on('$ionicView.enter',function () {
      initHeaderSlide();
    });
    // 初始化头部滚动条
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,
        observeParents:true

      });
    }
    // 改变头部颜色
    function headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<.85){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }


    $scope.images = [
      "../../img/ad1.jpg",
      "../../img/ad2.jpg",
      "../../img/ad3.jpg"
    ];

    //进行网络请求
    $scope.content1 = {
      img:"../../img/through_school_icon.png",
      name:"校园招聘",
      desc:"大学生求职专属"
    };
    $scope.content2 = {
      img:"../../img/through_train_icon.png",
      name:"面试直通车",
      desc:"直接与企业约面试"
    };
    $scope.jobs = [];


  })
