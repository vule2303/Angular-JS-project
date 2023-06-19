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
        controller: "HomeCtrl",
    };
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

// ==========================GENRE MOVIE=====================================
app.directive("genreDisplay", function () {
    return {
        restrict: "E",
        templateUrl: "/components/catalog/ListGenre.html",
        controller: "GenreCtrl",
    };
});
