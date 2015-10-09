//noinspection JSLint
angular.module("ultradiaCareers")

    .controller('CareersController', ["$scope", "$http", "$stateParams", "GetOpenings", function ($scope, $http, $stateParams, GetOpenings) {
        "use strict";

        //GetOpenings.openings.then(function (positions) {
        //    $scope.openings = positions.data;
        //});

        //$http({ method: 'GET', url: '/careers/positions.json' }).success(function (data) {
        //    console.log("Made it this far.");
        //    $scope.openings = data;
        //    console.log($scope.openings);
        //});

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
        });

    }])

    .controller('PositionsController', ["$scope", "$http", "$stateParams", "GetOpenings", function ($scope, $http, $stateParams, GetOpenings) {
        "use strict";

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
            $scope.positon = positions.data[GetOpenings.getPositionById($scope.openings, $stateParams.id)];
        });

    }]);