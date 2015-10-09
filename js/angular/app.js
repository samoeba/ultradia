var careersApp = angular.module("ultradiaCareers", ["ui.router", "services"]);

careersApp.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
        .state('careers', {
            url: "/careers",
            controller: "CareersController",
            templateUrl: "openings.html"
        })
        .state('positions', {
            url: "/position/:id",
            controller: "CareersController",
            templateUrl: "position.html"
        });
});
