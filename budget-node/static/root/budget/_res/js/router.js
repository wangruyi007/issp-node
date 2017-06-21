var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.budget", {
        url: "/budget",
        views: {
            "content@root": {
                templateUrl: "root/budget/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/budget/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})