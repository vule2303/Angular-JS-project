app.directive("headerCostume", function () {
    return {
        restrict: "E",
        templateUrl: "/components/index/header.html",
        
    };
});
app.directive("footerCostume", function () {
    return {
        restrict: "E",
        templateUrl: "/components/index/footer.html",
    };
});

app.directive("listMovie", function () {
    return {
        restrict: "E",
        templateUrl: "/components/main/nav_movies.html",
        controller: "HomeCtrl"
    };
});
