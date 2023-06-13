app.controller("UserTypeCtr", function ($scope, $http) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/UserTypeController/GetAll",
    }).then(function GetAll(response) {
        $scope.GetAll = response.data;
    });

    //===============================CREATE==================================

    $scope.Create = function () {
        var data = $.param({
            type_account: $scope.idType,
            price: $scope.idUser,
            device: $scope.startdate,
            quality: $scope.enddate,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/UserTypeController/Create";
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
                "https://vule2303.alwaysdata.net/Back-end/index.php/UserTypeController/Delete/" +
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
        type.startdate = new Date(type.startdate);
        type.enddate = new Date(type.enddate);
        console.log(type);
        $scope.dl_edit = type;
        $scope.showButton = false;
    };
    $scope.Cancle = function (type) {
        $scope.showButton = true;
    };
    $scope.Update = function (type) {
        var start = new Date(type.startdate);
        var dayt = start.getDate();
        var montht = start.getMonth() + 1;
        var yeart = start.getFullYear();

        var end = new Date(type.enddate);
        var daye = end.getDate();
        var monthe = end.getMonth() + 1;
        var yearte = end.getFullYear();
        var StartDate = dayt + "-" + montht + "-" + yeart;
        var EndDate = daye + "-" + monthe + "-" + yearte;
        var data = $.param({
            id: type.id,
            idType: type.idType,
            idUser: type.idUser,
            StartDate: StartDate,
            EndDate: EndDate,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/UserTypeController/Update";
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
