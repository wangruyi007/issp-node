var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business", {
        url: "/business",
        views: {
            "content@root": {
                templateUrl: "root/business/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/business/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})