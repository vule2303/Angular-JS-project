app.directive("navTop", function () {
    return {
        restrict: "E",
        templateUrl: "component/Shared/nav_top.html",
        controller: 'LoginCtr'
    };
});

app.directive("navLeft", function () {
    return {
        restrict: "E",
        templateUrl: "component/Shared/nav_left.html",
        controller: 'LoginCtr'
    };
});

