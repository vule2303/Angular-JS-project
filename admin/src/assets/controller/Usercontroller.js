app.controller("UserCtr", function ($scope, $http) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/UserController/GetAllUser",
    }).then(function GetAll(response) {
        $scope.GetAllUser = response.data;
    });

    //===============================CREATE==================================

    $scope.Create = function () {
        var dateObject = new Date($scope.birthday);
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1;
        var year = dateObject.getFullYear();

        var formattedBirthday = day + "-" + month + "-" + year;

        var data = $.param({
            username: $scope.username,
            email: $scope.email,
            password: $scope.password,
            phone: $scope.phone,
            birthday: formattedBirthday,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/UserController/CreateUser";
        var config = {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };
        $http.post(url, data, config).then(
            function success(res) {
                console.log(res.data);
                alert("Tạo mới người dùng thành công!!!");
            },
            function error(res) {
                alert("Tạo mới người dùng không thành công!!!");
            }
        );
    };

    //===============================DELETE==================================
    $scope.Delete = function (user) {
        $http({
            method: "DELETE",
            url:
                "https://vule2303.alwaysdata.net/Back-end/index.php/UserController/DeleteUser/" +
                user.id,
        }).then(
            function success() {
                alert("Xóa người dùng thành công!!!");
                var index = $scope.listuser.indexOf(user);
                $scope.GetAllUser.splice(index, 1);
                console.log(index);
            },
            function error() {
                alert("Lỗi");
            }
        );
    };

    //===============================UPDATE==================================
    $scope.showButton = true;
    $scope.Edit = function (user) {
        console.log(user);
        $scope.dl_edit = user;
        $scope.showButton = false;
    };
    $scope.Cancle = function (user) {
        $scope.showButton = true;
    };
    $scope.Update = function (user) {
        var data = $.param({
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            phone: user.phone,
            birthday: user.birthday,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/UserController/UpdateUser";
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
