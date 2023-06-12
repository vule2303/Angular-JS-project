app.controller(
    "LoginCtr",
    function ($scope, $http, $window, $rootScope, $location) {
        //$scope.loggedIn = $rootScope.loggedIn;
        $scope.showE = true;
        //===============================LOGIN==================================
        $scope.Login = function () {
            $scope.showE = false;

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
                    $rootScope.loggedIn = true;
                    var back = $location.search().back || "";
                    $location.url(back !== "/login" ? back : "");
                    $window.location.url = "/index.html";
                } else {
                    alert("The username or password incorrect");
                    $rootScope.loggedIn = false;
                }
            });
        };

        $scope.logout = function () {
            $scope.showE = true;
            // Clear the user's login status
            $rootScope.loggedIn = false;
            // Perform any necessary cleanup or additional logic
            // Redirect to the login page
            $location.url("/login");
        };
    }
);
