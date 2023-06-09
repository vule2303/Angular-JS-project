app.controller("UserCtr", function ($scope, $http) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/AdminController/GetAllUser",
    }).then(function GetAll(response) {
        $scope.GetAllUser = response.data;
    });

    //CREATE
    $scope.Create = function () {
        var data = $.param({
            name: $scope.username,
            email: $scope.email,
            password: $scope.password,
            phone: $scope.phone,
            birthday: $scope.birthday,
        });
        console.log(data);
    };
});
