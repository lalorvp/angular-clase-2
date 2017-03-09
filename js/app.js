
var app = angular.module('miapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/users', {
			templateUrl: 'views/accounts.html',
			controller: 'AccountsController'
		})
		.otherwise('/');

	$locationProvider.hashPrefix("");
});

app.controller('MainController', function($scope){

});

app.controller('HomeController', function($scope){

});

app.controller('AccountsController', function($scope){

	
});

app.directive('a', function(){
	return {
		restrict: 'E',
		link: function(scope, elem, attr){
			if(attr.href === '' || attr.href === '#'){
				elem.on('click', function(e){
					e.preventDefault();
				});
			}
		}
	}
});



















