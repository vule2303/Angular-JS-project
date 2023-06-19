app.controller(
    "SiginCtr",
    function ($scope, $http, $window, $rootScope, $location) {
        $scope.Login = function () {
            var data = $.param({
                username: $scope.username,
                password: $scope.password,
            });
            console.log(data);
            var url =
                "https://vule2303.alwaysdata.net/Back-end/index.php/LoginController/AuthorizeUser";
            var config = {
                headers: {
                    "content-type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                },
            };
            $http.post(url, data, config).then(function success(res) {
                if (res.data.success) {
                    $rootScope.Info = res.data.info;
                    $rootScope.loggedIn = true;
                    var back = $location.search().back || "";
                    $location.url(back !== "/signin" ? back : "");
                    $window.location.url = "/index.html";
                } else {
                    alert("The username or password incorrect");
                    $rootScope.loggedIn = false;
                }
            });
        };

        $scope.logout = function () {
            $scope.showE = false;
            // Clear the user's login status
            $rootScope.loggedIn = false;
            // Perform any necessary cleanup or additional logic
            // Redirect to the login page
            $location.url("/login");
        };

        ///////////////////
    }
);
