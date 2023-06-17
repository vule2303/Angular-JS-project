app.controller("HomeCtrl", function ($scope, $http) {
    $scope.GetLatest = [];
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/welcome/GetAllMovie",
    }).then(function GetAll(response) {
        $scope.GetAllMovie = response.data;
    });

    //GEt new Items of this season
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/welcome/GetLatestMovie",
    }).then(function (res) {
        $scope.GetLatest = res.data.slice(0, 4);
    });

    //GET RANDOM MOVIE
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/welcome/getRandomMovie",
    }).then(function (res) {
        $scope.ListMovie = res.data;
    });

    ///////////////////
});