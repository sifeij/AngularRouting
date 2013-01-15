angular.module('enterprise', [])

function AppCtrl($scope){
	$scope.crew = [
		{name: "Picard", description:"Captain"},
		{name: "Ricker", description:"Number One"},
		{name: "Worf", description:"Security"}
	]
}