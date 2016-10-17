'use strict';

var app = angular.module("app",[
		'ngRoute'
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'templates/bienvenido.html',
			controller: 'generalCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
})
.run(function ($rootScope, $location) {
	// body...
});