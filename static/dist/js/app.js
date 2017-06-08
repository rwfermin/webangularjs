(function() {

    var app = angular.module('appstore', []);

    /* Data */
    var gems = [
        {
            name: "Diamond",
            price: 5.55,
            description: "Lorem ipsum dolor sit amet",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "http://www.htmlcsscolor.com/preview/128x128/CC3300.png",
                    thumb: "http://www.htmlcsscolor.com/preview/128x128/CC3300.png"
                },
                {
                    full: "http://www.htmlcsscolor.com/preview/128x128/FF0000.png",
                    thumb: "http://www.htmlcsscolor.com/preview/128x128/FF0000.png"
                },
            ],
            reviews: [
                {
                    rating: 5,
                    email: "email@email.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },
                {
                    rating: 5,
                    email: "emil@ool.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },
                {
                    rating: 5,
                    email: "user@gmail.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },
                {
                    rating: 4,
                    email: "xxxy@email.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },              
            ]
        },
        {
            name: "Silver",
            price: 4.5,
            description: "Lorem ipsum dolor sit amet",
            canPurchase: true,
            soldOut: true,
            images: [
                {
                    full: "http://www.htmlcsscolor.com/preview/128x128/073170.png",
                    thumb: "http://www.htmlcsscolor.com/preview/128x128/073170.png"
                }
            ],
            reviews: [
                {
                    rating: 2,
                    email: "xxxy@email.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },              
            ]
        },
        {
            name: "Bronze",
            price: 2.99,
            description: "Lorem ipsum dolor sit amet",
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "http://www.htmlcsscolor.com/preview/128x128/4BC553.png",
                    thumb: "http://www.htmlcsscolor.com/preview/128x128/4BC553.png"
                },
                {
                    full: "http://www.htmlcsscolor.com/preview/128x128/276D43.png",
                    thumb: "http://www.htmlcsscolor.com/preview/128x128/276D43.png"
                }
            ],
            reviews: [
                {
                    rating: 5,
                    email: "user@gmail.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },
                {
                    rating: 4,
                    email: "xxxy@email.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },              
            ]
        },
        {
            name: "Copper",
            price: 2.81,
            description: "Lorem ipsum dolor sit amet",
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: "http://www.htmlcsscolor.com/preview/128x128/2A276D.png",
                    thumb: "http://www.htmlcsscolor.com/preview/128x128/2A276D.png"
                }
            ],
            reviews: [
                {
                    rating: 3,
                    email: "xxxy@email.com",
                    comment: "Lorem ipsum dolor sit amet.."
                },              
            ]
        }
    ];

    /* Controllers */
    app.controller('storecontroller', function() {
        this.heading = "Our Store";
        this.products = gems;       
    });

    /* Directives */
    app.directive('productsTitle', function() {
        return {
            restrict: "A",
            templateUrl: "templates/product-title.html"
        }
    });

    app.directive('productsInfo', function() {
        return {
            restrict: "E",
            templateUrl: "templates/products-info.html"
        }
    });

    app.directive('productsTab', function() {
        return {
            restrict: "E",
            templateUrl: "templates/products-tab.html",
            controller: function() {

            }
        }
    });
})();