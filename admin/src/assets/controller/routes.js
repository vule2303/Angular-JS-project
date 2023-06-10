var app = angular.module("AdminPage", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/user", {
            templateUrl: "component/User/UserData.html",
        })
        .when("/type", {
            templateUrl: "component/User/TypeData.html",
        })
        .when("/movie", {
            templateUrl: "component/Movie/MovieData.html",
        })
        .otherwise({
            redirectTo: "/user",
        });
});
