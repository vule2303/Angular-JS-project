app.controller("GenreCtrl", function ($scope, $http, $rootScope) {
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/GetAll",
    }).then(function GetAll(response) {
        $scope.GetAllGenre = response.data;
        console.log(response.data);
    });
    //AllMovie
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/MovieController/GetAll",
    }).then(function GetAll(response) {
        $scope.AllMovie = response.data;
        console.log(response.data);
    });
    ///////////////////
    $scope.getSelectedValue = function () {
        var name = $scope.selectedValue;
        $rootScope.changeData = false;
        $http({
            method: "GET",
            url:
                "https://vule2303.alwaysdata.net/Back-end/index.php/GenreController/getMovieByType/" +
                name,
        }).then(function GetDaTa(res) {
            $rootScope.changeData = true;
            $scope.TypeOfMovie = res.data;
            console.log(res.data);
        });
        
        // Hoặc bạn có thể thực hiện các thao tác khác với $scope.selectedValue ở đây
    };
    // Hoặc bạn có thể thực hiện các thao tác khác với selectedGenreId ở đây
});
