var careersApp = angular.module("ultradiaCareers", ["ui.router", "services"]);

careersApp.config(function($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
        .state('careers', {
            url: "/",
            templateUrl: "openings.html",
            controller: "CareersController"
        })
        .state('positions', {
            url: "/position/:id",
            templateUrl: "position.html",
            controller: "PositionsController"
        });
    $urlRouterProvider.otherwise('/');
});
