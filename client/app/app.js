'use strict';
var app = angular.module("shopApp", [
	'ui.router'
]);
	app.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
	    $urlRouterProvider.otherwise('/');

	    $locationProvider.html5Mode(true);
	});