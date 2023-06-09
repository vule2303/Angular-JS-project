var app = angular.module("AdminPage", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/user", {
            templateUrl: "component/User/DataUser.html",
        })
        .when("/movie", {
            templateUrl: "component/User/DataUser.html",
        });
});
