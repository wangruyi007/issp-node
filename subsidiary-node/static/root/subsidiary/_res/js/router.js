var app = angular.module('subsidiary',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.subsidiary", {
        url: "/subsidiary",
        views: {
            "content@root": {
                templateUrl: "root/subsidiary/_res/html/index.html",
                controller: "subsidiaryCtrl"
            },"nav@root":{
                templateUrl: "root/subsidiary/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});