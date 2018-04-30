angular.module("projects", []).controller("projectsController",
['$scope', '$http',

function($scope, $http){
  $scope.show = 'all';

  $http.get('projects.json').then(function(data) {
      $scope.projects = data.data;
  })

  $scope.showList = function(value){
      $scope.show = value;
  }
}])