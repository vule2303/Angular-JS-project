var app = angular.module("route", ["ngRoute"]);
const DOMAIN = "https://vule2303.alwaysdata.net/Back-end/index.php";
app.config(function ($routeProvider) {
    // body...

    $routeProvider
        .when("/home", {
            templateUrl: "/views/main.html",
        })
        .when("/series", {
            templateUrl: "/views/signup.html",
            controller: "",
        })
        .when("/about", {
            templateUrl: "/views/about.html",
            controller: "",
        })
        .when("/genre", {
            templateUrl: "/views/catalog.html",
            controller: "",
        })
        .when("/plan", {
            templateUrl: "/views/pricing.html",
            controller: "",
        })
        .when("/movies", {
            templateUrl: "/views/movies.html",
            controller: "",
        })
        .when("/series-movies", {
            templateUrl: "/views/series-movies.html",
        })
        .when("/signin", {
            templateUrl: "/views/signin.html",
        })
        .when("/signup", {
            templateUrl: "/views/signup.html",
        })
        .when("/profile", {
            templateUrl: "/views/profile.html",
        })
        .otherwise({
            redirectTo: "/home",
        });
});


