var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.problem", {
        url: "/problem",
        views: {
            "content@root": {
                templateUrl: "root/problem/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/problem/_res/html/nav.html",
            }
        }
    })
})