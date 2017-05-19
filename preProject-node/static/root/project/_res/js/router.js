var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.project", {
        url: "/project",
        views: {
            "content@root": {
                templateUrl: "root/project/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/project/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})