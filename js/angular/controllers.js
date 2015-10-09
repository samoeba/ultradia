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

        console.log($stateParams.field);
        console.log($stateParams.id);

        GetOpenings.openings.then(function (positions) {
            $scope.openings = positions.data;
            console.log($scope.openings);
            $scope.position = positions.data[GetOpenings.getField($scope.openings, $stateParams.field)].positions[GetOpenings.getPositionById($scope.openings, $stateParams.field, $stateParams.id)];
            console.log($scope.position);
            console.log(GetOpenings.getField($scope.openings, $stateParams.field));
            console.log(GetOpenings.getPositionById($scope.openings, $stateParams.field, $stateParams.id));
        });

    }]);