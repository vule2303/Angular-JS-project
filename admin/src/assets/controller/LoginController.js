app.controller("LoginCtr", function ($scope, $http, $window) {
    //GET ALL

    //===============================CREATE==================================

    $scope.Login = function () {
        var data = $.param({
            username: $scope.username,
            password: $scope.password,
        });
        console.log(data);
        var url =
            "https://vule2303.alwaysdata.net/Back-end/index.php/LoginController/Authorize";
        var config = {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };
        $http.post(url, data, config).then(function success(res) {
            if (res.data.success) {
                $window.location.href = "index.html";
            } else {
                alert("The username or password incorrect");
            }
        });
    };
});
