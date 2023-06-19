app.controller("GenreCtrl", function ($scope, $http) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/GetAll",
    }).then(function GetAll(response) {
        $scope.GetAllGenre = response.data;
        console.log(response.data);
    });

    ///////////////////
});
