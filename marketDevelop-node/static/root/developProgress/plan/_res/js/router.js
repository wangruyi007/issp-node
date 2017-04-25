var app = angular.module('plan',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.developProgress.plan", {
        url: "/plan",
        views: {
            "content@root": {
                templateUrl: "root/developProgress/plan/_res/html/index.html",
                controller: "planCtrl"
            }
        }
    })
})