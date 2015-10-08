//noinspection JSLint
angular.module("ultradiaCareers")

    .controller('CareersController', ["$scope", "$stateParams", "GetOpenings", function ($scope, $stateParams, GetOpenings) {
        "use strict";

        //GetOpenings.openings.then(function (positions) {
        //    $scope.openings = positions.data;
        //});

        $http({ method: 'GET', url: '/car/albums.json' }).success(function (data) {
            console.log("Made it this far.");
            $scope.collection = data;
        });

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
            $scope.album = positions.data[GetOpenings.getPositionById($scope.openings, "pid", $stateParams.id)];
        });

    }]);