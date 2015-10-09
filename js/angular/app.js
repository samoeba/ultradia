var careersApp = angular.module("ultradiaCareers", ["ui.router", "services"]);


//careersApp.run(function($rootScope, $state) {
//    $rootScope.$scope = $state;
//});

careersApp.config(function($stateProvider) {
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
    $stateProvider
        .state("home", {
            url: "",
            templateUrl: "openings.html",
            controller: "CareersController"
        })
        .state('position', {
            url: "/position/:id",
            templateUrl: "position.html",
            controller: "PositionsController"
        });
    //$urlRouterProvider.otherwise('/');
});
