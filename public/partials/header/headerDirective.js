angular.module('zoneApp.directives', [])
.directive('mainHeader', function() {
  return {
  	restrict: 'E',
  	controller: function($scope) {

  	},
    templateUrl: '/partials/header/headerView.html'
  };
});