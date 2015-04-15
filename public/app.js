var zoneApp = angular.module('zoneApp',[
	'ngRoute',
	'zoneApp.controllers',
	//'zoneApp.models',
	'zoneApp.directives'
	]);


zoneApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'components/home/homeView.html',
	}).
	when('/portal', {
		templateUrl: 'components/login/loginView.html',
	}).
	otherwise({
		redirectTo: '/'
	});

}]);