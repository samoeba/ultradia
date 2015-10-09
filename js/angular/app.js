var careersApp = angular.module("ultradiaCareers", ["ui.router", "services"]);

careersApp.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
        .state('positions', {
            url: "/position/:id",
            controller: "PositionController",
            templateUrl: "position.html"
        });
});
