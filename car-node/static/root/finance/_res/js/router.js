var app = angular.module('business',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.finance", {
        url: "/finance",
        views: {
            "content@root": {
                templateUrl: "root/finance/_res/html/index.html",
                controller: "businessCtrl"
            },"nav@root": {
                templateUrl: "root/finance/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})