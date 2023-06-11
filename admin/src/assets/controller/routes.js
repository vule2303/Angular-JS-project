var app = angular.module("AdminPage", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/user", {
            templateUrl: "component/User/UserData.html",
        })
        .when("/type", {
            templateUrl: "component/User/TypeData.html",
        })
        .when("/type-account", {
            templateUrl: "component/User/User_Type.html",
        })
        .when("/movie", {
            templateUrl: "component/Movie/MovieData.html",
        })
        .when("/genre", {
            templateUrl: "component/Movie/GenreData.html",
        })
        .when("/moviegenre", {
            templateUrl: "component/Movie/MovieGenre.html",
        })
        .otherwise({
            redirectTo: "/user",
        });
});
