angular.module('enterprise', []).
	//config(function($routeProvider, $locationProvider){
		//$locationProvider.html5Mode(true); // to get rid of "#" in url
	config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/angularrouting/', {templateUrl: 'partials/list.html'});
			//when('/angularrouting/new', {templateUrl: 'partials/edit.html', controller: NewCtrl});
		//$routeProvider.when("/angularrouting/edit/:id", {templateUrl:"/partials/edit.html", controller:"EditCtrl"});
		//$routeProvider.otherwise({redirectTo:"/"}); //handle the url that does not exist
	}]);

function EditCtrl ($scope, $location, $routeParams) {
	$scope.person = $scope.crew[$routeParams.id];
	$scope.save = function(){
		$location.path("/");
	}
}

function NewCtrl ($scope, $location) {
	$scope.person = {name:"", description:""};
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