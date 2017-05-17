var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.progress", {
        url: "/progress",
        views: {
            "content@root": {
                templateUrl: "root/progress/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/progress/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})