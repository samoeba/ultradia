var careersServices = angular.module("services", [])

    .factory("GetOpenings", ["$http", function ($http) {
        "use strict";

        var GetOpenings = this, i;

        GetOpenings.openings = $http.get("/careers/positions.json");

        return {

            openings: GetOpenings.openings,
            getPositionById: function (data, value) {
                for (i = 0; i < data.length; i++) {
                    if (data[i].positions[0].pid == value) {
                        return i;
                    }
                }
            }
        };

    }]);