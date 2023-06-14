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
        .when("/login", {
            templateUrl: "component/Login/login.html",
            controller: "LoginCtr",
        })
        .otherwise({
            redirectTo: "/user",
        });
});

app.run(function ($rootScope, $location) {

    // attach to the event that fires before the router changes routes
    $rootScope.$on("$routeChangeStart", function (event, next) {
        // check current login status and filter out if navigating to login
        if (!$rootScope.loggedIn && next.originalPath !== "/login") {
            // remember the original url
            $location.url("/login?back=" + $location.url());
        }
    });
});
//execute this function when the main module finishes loading
