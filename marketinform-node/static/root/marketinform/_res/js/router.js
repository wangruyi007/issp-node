var app = angular.module('marketinform',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.marketinform", {
        url: "/marketinform",
        views: {
            "content@root": {
                templateUrl: "root/marketinform/_res/html/index.html",
                controller: "marketinformCtrl"
            },"nav@root": {
                templateUrl: "root/marketinform/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})