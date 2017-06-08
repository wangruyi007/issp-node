var app = angular.module('compete',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.compete", {
        url: "/compete",
        views: {
            "content@root": {
                templateUrl: "root/compete/_res/html/index.html",
                controller: "competeCtrl"
            },"nav@root": {
                templateUrl: "root/compete/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})