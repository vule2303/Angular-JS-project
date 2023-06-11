app.controller("LoginCtr", function ($scope, $http) {
    //GET ALL

    //===============================CREATE==================================

    $scope.Login = function () {
        var data = $.param({
            name: $scope.username,
            password: $scope.password,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/LoginController/Create";
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
                alert("The username or password is incorrect");
            }
        );
    };
});
