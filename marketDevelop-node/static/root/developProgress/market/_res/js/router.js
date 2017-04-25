var app = angular.module('market',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.developProgress.market", {
        url: "/market",
        views: {
            "content@root": {
                templateUrl: "root/developProgress/market/_res/html/index.html",
                controller: "marketCtrl"
            }
        }
    })
})