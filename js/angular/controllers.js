//noinspection JSLint
angular.module("ultradiaCareers")

    .controller('CareersController', ["$scope", "GetOpenings", function ($scope, GetOpenings) {
        "use strict";

        //GetOpenings.openings.then(function (positions) {
        //    $scope.openings = positions.data;
        //});

        //$http({ method: 'GET', url: '/careers/positions.json' }).success(function (data) {
        //    console.log("Made it this far.");
        //    $scope.openings = data;
        //    console.log($scope.openings);
        //});

        console.log("Made it to here");

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
            console.log("test");
        });

    }])

    .controller('PositionsController', ["$scope", "$stateParams", "GetOpenings", function ($scope, $stateParams, GetOpenings) {
        "use strict";

        GetOpenings.openings.then(function (positions) {
            console.log("PositionsCtrl test");
            $scope.openings = positions.data;
            console.log($scope.openings);
            $scope.position = positions.data[GetOpenings.getPositionById($scope.openings, $stateParams.id)];
        });

    }]);