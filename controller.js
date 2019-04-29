var app = angular.module("projects", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      //templateUrl: "projects2.html"
      templateUrl: "html/projectslist.html"
    })
    .otherwise({
      templateUrl: "html/projectpage.html"
    });
});

app.controller("projectsController", [
  "$scope",
  "$http",
  "$route",

  function($scope, $http, $route) {
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
          break;
        }
      }
    });

    $scope.loadProject = function(id) {
      $scope.projectInfo = $scope.projects[id];
      $scope.slideshow = $scope.projectInfo.project.slideshow;
      window.scrollTo(0, document.getElementById("i").scrollHeight);
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
      if (value === "HTC Vive") value = "htcvive2";
      if (value === "Open Weather Map API") value = "openweathermap";
      if (value === "Visual Studio") value = "visualstudio";
      return "./icon/" + value + ".png";
    };

    $scope.getIconDescription = function(value) {
      switch (value) {
        case "Unity":
          return "A cross-platform real-time game engine developed by Unity Technologies.";
        case "SteamVR":
          return "An API and SDK developed by Valve to support VR devices.";
        case "HTC Vive":
          return "A VR Headset created by HTC and Valve.";
        case "C#":
          return "A multi-purpose object oriented programming language by Microsoft.";
        case "Java":
          return "A class-based object oriented programming language by Oracle.";
        case "Netbeans":
          return "An IDE written in Java for Java by Oracle.";
        case "Bulbapedia":
          return "An encyclopedia about all things Pokemon.";
        case "C++":
          return "A powerful programming language that provides high and low level features";
        case "OpenGL":
          return "A cross-platform API for rendering 2D and 3D graphics.";
        case "Visual Studio":
          return "An IDE written in C++ and C# by Microsoft.";
        case "HTML":
          return "A standard markup language for creating websites.";
        case "CSS":
          return "A style sheet language used to alter a websites appearance.";
        case "Bootstrap":
          return "A CSS framework for responsive mobile-first front-end web development.";
        case "AngularJS":
          return "A front-end framework for developing single-page applications.";
        case "Javascript":
          return "A high-level scripting language for websites.";
        case "Open Weather Map API":
          return "An API that holds weather data from around the globe.";
        default:
          return "NULL";
      }
    };

    $scope.getClass = function(value) {
      if ($scope.projectInfo.id == 7) return "col-lg-3";
      return "col-lg-6";
    };
  }
]);
