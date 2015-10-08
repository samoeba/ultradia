var careersServices = angular.module("services", [])

    .factory("GetOpenings", ["$http", function ($http) {
        "use strict";

        var GetOpenings = this, i;

        GetOpenings.openings = $http.get("/careers/positions.json");

        return {

            openings: GetOpenings.openings,
            getPositionById: function (data, prop, value) {
                for (i = 0; i < data.length; i++) {
                    if (data[i][prop] == value) {
                        return i;
                    }
                }
            }
        };

    }]);