var app = angular.module('other',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.developProgress.other", {
        url: "/other",
        views: {
            "content@root": {
                templateUrl: "root/developProgress/other/_res/html/index.html",
                controller: "otherCtrl"
            }
        }
    })
})