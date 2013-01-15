angular.module('enterprise', []).
	config(function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true); // to get rid of "#" in url

		$routeProvider.
			when("/", {templateUrl:"/partials/list.html"}).
			when("/new", {templateUrl:"/partials/edit.html", controller:"newCtrl"})
	})

function NewCtrl ($scope, $location) {
	$scope.person = {name:"", description:""}
	$scope.save = function(){
		$scope.crew.push($scope.person);
		$location.path("/");
	}
	
}

function AppCtrl($scope){
	$scope.crew = [
		{name: "Picard", description:"Captain"},
		{name: "Ricker", description:"Number One"},
		{name: "Worf", description:"Security"}
	]
}