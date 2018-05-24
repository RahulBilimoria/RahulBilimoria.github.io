var app = angular.module("projects", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "projects.htm",
  })
    .otherwise({
      templateUrl: "project.htm",
  })
})

app.controller("projectsController",
['$scope', '$http',

  function($scope, $http){
    $scope.show = 'all';
    $scope.projectInfo = null;
    $scope.active = 0;
    
    $http.get('projects.json').then(function(data) {
        $scope.projects = data.data;
    })

    $scope.showList = function(value){
        $scope.show = value;
    }

    $scope.setProject = function(value, id){
      $scope.projectInfo = $scope.projects[id];
      $scope.slideshow = $scope.projectInfo.project.slideshow;
      window.scrollTo(0,0);
    }

    $scope.getIcon = function(value){
      if (value === "C#") value = "CSharp";
      if (value === "HTC Vive") value = "htcvive";
      if (value === "Open Weather Map API") value = "openweathermap";
      if (value === "Visual Studio") value = "visualstudio";
      return "./icon/" + value + ".png";
    }
}])