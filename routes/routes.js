var app = angular.module("route", ["ngRoute"]);
const DOMAIN = "https://vule2303.alwaysdata.net/Back-end/index.php";
app.config(function ($routeProvider) {
    // body...

    $routeProvider
        .when("/home", {
            templateUrl: "../views/main.html",
            controller: "HomeCtrl",
        })
        .when("/series", {
            templateUrl: "/views/signup.html",
            controller: "",
        })
        .when("/about", {
            templateUrl: "/views/about.html",
            controller: "",
        })
        .when("/category", {
            templateUrl: "/views/catalog.html",
            controller: "",
        })
        .when("/movies", {
            templateUrl: "/views/movies.html",
            controller: "",
        })
        .when("/series-movies", {
            templateUrl: "/views/series-movies.html",
        })
        .otherwise({
            redirectTo: "/home",
        });
});

// ========================================HOME=====================================================
app.controller("HomeCtrl", function ($scope, $http) {
    $scope.GetLatest = [];
    //GET ALL
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/welcome/GetAllMovie",
    }).then(function GetAll(response) {
        $scope.GetAllMovie = response.data;
    });

    //GEt new Items of this season
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/welcome/GetLatestMovie",
    }).then(function (res) {
        $scope.GetLatest = res.data.slice(0, 4);
    });

    //GET RANDOM MOVIE
    $http({
        method: "GET",
        url: "https://vule2303.alwaysdata.net/Back-end/index.php/welcome/getRandomMovie",
    }).then(function (res) {
        $scope.ListMovie = res.data;
    });

    ///////////////////
});
app.directive("owlCarouselItem", function () {
    return {
        restrict: "A",
        scope: {
            items: "=", // Biến items sẽ được truyền từ controller
        },
        link: function (scope, element) {
            // Kiểm tra xem dữ liệu đã sẵn có hay chưa
            scope.$watch("items", function (newVal) {
                if (newVal && newVal.length > 0) {
                    // Xóa bỏ các slide hiện tại
                    element.owlCarousel("destroy").empty();

                    // Thêm các slide mới từ dữ liệu items
                    newVal.forEach(function (item) {
                        var slide = $("<div>").addClass("item");
                        console.log(item);
                        // Tạo nội dung của slide dựa trên dữ liệu
                        var content = `
                        <div class="card card--big">
                        <div class="card__cover">
                            <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}" alt="" />
                            <a href="#" class="card__play">
                                <i class="icon ion-ios-play"></i>
                            </a>
                        </div>
                        <div class="card__content">
                            <h3 class="card__title">
                                <a href="#" >${item.title}</a>
                            </h3>
                            <span class="card__category">
                            </span>
                            <span class="card__rate"
                                ><i class="icon ion-ios-star"></i>${item.vote_average}</span
                            >
                        </div>
                    </div>
              `;

                        slide.html(content);
                        element.append(slide);
                    });

                    // Khởi tạo lại Owl Carousel
                    element.owlCarousel({
                        mouseDrag: false,
                        touchDrag: false,
                        dots: false,
                        loop: true,
                        autoplay: false,
                        smartSpeed: 600,
                        margin: 30,
                        responsive: {
                            0: {
                                items: 2,
                            },
                            576: {
                                items: 2,
                            },
                            768: {
                                items: 3,
                            },
                            992: {
                                items: 4,
                            },
                            1200: {
                                items: 4,
                            },
                        },
                    });
                }
            });
        },
    };
});

// =============================================================================================
// app.controller("MoviesDetail", function ($scope, $http, $routeParams) {
//     // body
//     $scope.id = $routeParams.id;
// });
