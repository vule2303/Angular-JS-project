app.controller("NavCtr", function ($scope, $rootScope) {
    $scope.loggedIn = $rootScope.loggedIn;
    console.log($rootScope.loggedIn);
});
