'use strict';

angular.module('shopApp')
  .config(function($stateProvider) {
    $stateProvider.state('index', {
          url: '/',
          views: {
            "context@": {
              templateUrl: 'app/index/index.html',
              controller:'IndexCtrl'
            }
          }
        })
  });
