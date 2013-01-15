angular.module('enterprise', []).
	config(function($routeProvider){
		$routeProvider.
			when("/", {templateUrl:"/partials/list.html"})
	})

function AppCtrl($scope){
	$scope.crew = [
		{name: "Picard", description:"Captain"},
		{name: "Ricker", description:"Number One"},
		{name: "Worf", description:"Security"}
	]
}