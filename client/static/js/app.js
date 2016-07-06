
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap'])
console.log('in angular config')
myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'static/partials/main.html',
		controller: 'MainController',
		controllerAs: 'MC'
	})
	.otherwise({
		redirectTo: '/'
	})
})
.controller('MainController', function(){
	
})