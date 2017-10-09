'use strict';

angular.module('shopApp')
    .controller('IndexCtrl',function($scope,$timeout) {
      var homeBannerImage = [
        {
          href: null,
          name: "轮播1",
          orders_by: 1,
          pic_url: "../assets/images/ban01.jpg",
          title: null
        }
        //,
        //{
        //  href: null,
        //  name: "轮播2",
        //  orders_by: 1,
        //  pic_url: "../assets/images/hero-1st.jpg",
        //  title: null
        //} ,
        //{
        //  href: null,
        //  name: "轮播3",
        //  orders_by: 1,
        //  pic_url: "../../assets/images/hero-3rd@2x.jpg",
        //  title: null
        //}

      ];
      // 获取banner轮转图片
      $scope.bannerImage = [];
      for (var index_ = 0; index_ < homeBannerImage.length; index_++) {
        var value = homeBannerImage[index_];
        $scope.bannerImage.push({
          bg: {
            background: "url('" + value.pic_url + "') no-repeat center"
          }
        });
      }

      $scope.onBannerUpeded = function () {
        //初始化轮播图
        $timeout(function () {
          var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            autoplayDisableOnInteraction: true,
            speed: 1000,
            loop: true,
            //direction: 'vertical',
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,
            //监听，自动更新
            observer: true,
            observeParents: true,
            effect: 'fade'
            // 如果需要前进后退按钮
            //nextButton: '.swiper-button-next',
            //prevButton: '.swiper-button-prev',
          });
        }, 500);
      };
      $scope.onBannerUpeded();
})
