app.controller("GenreCtr", function ($scope, $http) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/GetAll",
    }).then(function GetAll(response) {
        $scope.GetAll = response.data;
    });

    //===============================CREATE==================================

    $scope.Create = function () {
        var data = $.param({
            name: $scope.name,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/Create";
        var config = {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };
        $http.post(url, data, config).then(
            function success(res) {
                console.log(res.data);
                alert("Create Success");
            },
            function error(res) {
                alert("Error");
            }
        );
    };

    //===============================DELETE==================================
    $scope.Delete = function (genre) {
        $http({
            method: "DELETE",
            url:
                "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/Delete/" +
                genre.id,
        }).then(
            function success() {
                alert("Delete Success");
            },
            function error() {
                alert("Error");
            }
        );
    };

    //===============================UPDATE==================================
    $scope.showButton = true;
    $scope.Edit = function (genre) {
        console.log(genre);
        $scope.dl_edit = genre;
        $scope.showButton = false;
    };
    $scope.Cancle = function (genre) {
        $scope.showButton = true;
    };
    $scope.Update = function (genre) {
        var data = $.param({
            id: genre.id,
            name: genre.name,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/Update";
        var config = {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };
        $http.post(url, data, config).then(function success(res) {
            console.log(res.data);
            alert("Update Success");
        }),
            function error(res) {
                console.log(res.data);
            };
    };
});
