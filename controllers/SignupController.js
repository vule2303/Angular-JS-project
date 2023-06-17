app.controller("SignupCtr", function ($scope, $http, $window, $location) {
    $scope.SignUp = function () {
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
                alert("Sign Up Success!");
                $location.path("/signin");
            },
            function error(res) {
                alert("Sign Up Fail!");
            }
        );
    };
    ///////////////////
});
