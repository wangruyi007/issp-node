var app = angular.module('initialize',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.initialize", {
        url: "/initialize",
        views: {
            "content@root": {
                templateUrl: "root/initialize/_res/html/index.html",
                controller: "initializeCtrl"
            },"nav@root": {
                templateUrl: "root/initialize/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})