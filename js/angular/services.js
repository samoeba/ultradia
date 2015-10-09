var careersServices = angular.module("services", [])

    .factory("GetOpenings", ["$http", function ($http) {
        "use strict";

        var GetOpenings = this, i, j;

        GetOpenings.openings = $http.get("/careers/positions.json");

        return {

            openings: GetOpenings.openings,
            getField: function (data, fieldValue) {
                for (i = 0; i < data.length; i++) {
                    if (data[i].field == fieldValue) {
                        return i;
                    }
                }
            },
            getPositionById: function (data, fieldValue, idValue) {
                for (i = 0; i < data.length; i++) {
                    if (data[i].field == fieldValue) {
                        for (j = 0; j < data[i].positions.length; j++) {
                            if (data[i].positions[j] == idValue) {
                                return j;
                            }
                        }
                    }
                }
            }
        };

    }]);