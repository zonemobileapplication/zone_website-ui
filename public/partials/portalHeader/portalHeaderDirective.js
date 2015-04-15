angular.module('zoneApp.directives', [])
.directive('portalHeader', function() {
  return {
  	restrict: 'E',
  	controller: function($scope) {

  	},
    templateUrl: '/partials/portalHeader/portalHeaderView.html'
  };
});