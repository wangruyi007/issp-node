var app = angular.module('marketActivity',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.marketActivity", {
        url: "/marketActivity",
        views: {
            "content@root": {
                templateUrl: "root/marketActivity/_res/html/index.html",
                controller: "marketActivityCtrl"
            },"nav@root": {
                templateUrl: "root/marketActivity/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})