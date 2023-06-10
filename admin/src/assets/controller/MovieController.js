app.controller("MovieCrt", function ($scope, $http) {
    //GET ALL

    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/MovieController/GetAll",
    }).then(function GetAll(response) {
        $scope.GetAll = response.data;
    });

    //===============================CREATE==================================

    $scope.Create = function () {
        var data = $.param({
            title: $scope.title,
            overview: $scope.overview,
            release: $scope.release,
            country: $scope.country,
            trailer: $scope.trailer,
            runtime: $scope.runtime,
            vote_average: $scope.vote_average,
            quality: $scope.quality,
            age: $scope.age,
            poster_path: $scope.poster_path,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/MovieController/Create";
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
                "https://vule2303.alwaysdata.net/Back-end/index.php/MovieController/Delete/" +
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
            title: user.title,
            overview: user.overview,
            release: user.release,
            country: user.country,
            trailer: user.trailer,
            runtime: user.runtime,
            vote_average: user.vote_average,
            quality: user.quality,
            age: user.age,
            poster_path: user.poster_path,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/MovieController/Update";
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
