var app = angular.module('secure',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.insurance", {
        url: "/insurance",
        views: {
            "content@root": {
                templateUrl: "root/insurance/_res/html/index.html",
                controller: "secureCtrl"
            },"nav@root":{
                templateUrl: "root/insurance/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});