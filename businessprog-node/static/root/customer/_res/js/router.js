var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.customer", {
        url: "/customer",
        views: {
            "content@root": {
                templateUrl: "root/customer/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/customer/_res/html/nav.html",
            }
        }
    })
})