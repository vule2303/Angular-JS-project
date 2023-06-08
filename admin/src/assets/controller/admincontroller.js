var app = angular.module("AdminPage", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "component/User/DataUser.html",
    });
    
});
