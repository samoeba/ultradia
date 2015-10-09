//noinspection JSLint
angular.module("ultradiaCareers")

    .controller('CareersController', ["$scope", "GetOpenings", function ($scope, GetOpenings) {
        "use strict";

        console.log("Made it to here");

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
            console.log("test");
        });

    }])

    .controller('PositionsController', ["$scope", "$stateParams", "GetOpenings", function ($scope, $stateParams, GetOpenings) {
        "use strict";

        console.log($stateParams.id);

        GetOpenings.openings.then(function (positions) {
            console.log("PositionsCtrl test");
            $scope.openings = positions.data;
            console.log("Look here" + $scope.openings[0]);
            $scope.position = positions.data[GetOpenings.getPositionById($scope.openings, $stateParams.id)];
            console.log($scope.position);
            console.log(GetOpenings.getPositionById($scope.openings, $stateParams.id));
        });

    }]);