'use strict';
angular.module('shopApp')
  .config(function($stateProvider) {
    $stateProvider.state('index', {
          url: '/',
          views: {
            root: {
              templateUrl: 'app/index/index.html',
              controller:'IndexCtrl'
            }
          }
        })
  });