//noinspection JSLint
angular.module("ultradiaCareers")

    .controller('CareersController', ["$scope", $http, "$stateParams", "GetOpenings", function ($scope, $http, $stateParams, GetOpenings) {
        "use strict";

        //GetOpenings.openings.then(function (positions) {
        //    $scope.openings = positions.data;
        //});

        $http({ method: 'GET', url: '/careers/albums.json' }).success(function (data) {
            console.log("Made it this far.");
            $scope.collection = data;
        });

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
            $scope.album = positions.data[GetOpenings.getPositionById($scope.openings, "pid", $stateParams.id)];
        });

    }]);