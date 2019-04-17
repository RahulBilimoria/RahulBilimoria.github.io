var app = angular.module("projects", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      //templateUrl: "projects2.html"
      templateUrl: "html/projectslist.html"
    })
    .when("/flappyjump", {
      templateUrl: "html/flappyjump.html"
      /* use :projectName instead */
    })
    .otherwise({
      templateUrl: "project.html"
    });
});

app.controller("projectsController", [
  "$scope",
  "$http",

  function($scope, $http, $location) {
    $scope.show = "all";
    $scope.projectInfo = null;
    $scope.active = 0;

    $http.get("projects.json").then(function(data) {
      $scope.projects = data.data;
      var url = window.location.href.split("#!/")[1];
      if (!url) return;
      for (var i = 0; i < $scope.projects.length; i++) {
        if ($scope.projects[i].link.indexOf(url) > 0) {
          $scope.projectInfo = $scope.projects[i];
          $scope.slideshow = $scope.projectInfo.project.slideshow;
          window.scrollTo(0, 0);
          break;
        }
      }
    });

    $scope.loadProject = function(id) {
      $scope.projectInfo = $scope.projects[id];
      $scope.slideshow = $scope.projectInfo.project.slideshow;
      window.scrollTo(0, 0);
    };

    $scope.showList = function(value) {
      $scope.show = value;
      var s = "> ";
      switch (value) {
        case "vr":
          s += "Virtual Reality";
          break;
        case "game":
          s += "Game Development";
          break;
        case "webdev":
          s += "Web Development";
          break;
        default:
          s += "All Projects";
          break;
      }
      document.getElementById("subtitle").innerHTML = s;
    };

    $scope.getIcon = function(value) {
      if (value === "C#") value = "CSharp";
      if (value === "HTC Vive") value = "htcvive";
      if (value === "Open Weather Map API") value = "openweathermap";
      if (value === "Visual Studio") value = "visualstudio";
      return "./icon/" + value + ".png";
    };
  }
]);
