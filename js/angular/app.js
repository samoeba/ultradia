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
        .state("careers", {
            url: "",
            templateUrl: "openings.html",
            controller: "CareersController"
        })
        .state('position', {
            url: "/position/:field?id",
            templateUrl: "position.html",
            controller: "PositionsController"
        });
    //$urlRouterProvider.otherwise('/');
});

careersApp.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')'
            });
        });
    };
});
