angular.module("projects", []).controller("projectsController",
['$scope', '$http',

function($scope, $http){
  $scope.showProject = false;
  $scope.show = 'all';
  $scope.projectInfo = null;

  $http.get('projects.json').then(function(data) {
      $scope.projects = data.data;
  })

  $scope.showList = function(value){
      $scope.show = value;
  }
  
  $scope.setProject = function(value, id){
    $scope.projectInfo = $scope.projects[id];
    $scope.showProject = value;
  }
  
  $scope.getIcon = function(value){
    if (value === "C#") value = "CSharp";
    if (value === "HTC Vive") value = "htcvive";
    if (value === "Open Weather Map API") value = "openweathermap";
    if (value === "Visual Studio") value = "visualstudio";
    return "./icon/" + value + ".png";
  }
}])