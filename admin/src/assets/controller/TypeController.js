app.controller("TypeCtr", function ($scope, $http) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/TypeController/GetAll",
    }).then(function GetAll(response) {
        $scope.GetAll = response.data;
    });

    //===============================CREATE==================================

    $scope.Create = function () {
        var data = $.param({
            type_account: $scope.type_account,
            price: $scope.price,
            device: $scope.device,
            quality: $scope.quality,
            exp: $scope.exp,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/TypeController/Create";
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
    $scope.Delete = function (type) {
        $http({
            method: "DELETE",
            url:
                "https://vule2303.alwaysdata.net/Back-end/index.php/TypeController/Delete/" +
                type.id,
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
    $scope.Edit = function (type) {
        console.log(type);
        $scope.dl_edit = type;
        $scope.showButton = false;
    };
    $scope.Cancle = function (type) {
        $scope.showButton = true;
    };
    $scope.Update = function (type) {
        var data = $.param({
            id: type.id,
            type_account: type.type_account,
            price: type.price,
            device: type.device,
            quality: type.quality,
            exp: type.exp,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/TypeController/Update";
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
