var app = angular.module('businessModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.customer", {
        url: "/customer",
        views: {
            "content@root": {
                templateUrl: "root/customer/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/customer/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})