var app = angular.module('developModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.developProgress", {
        url: "/developProgress",
        views: {
            "content@root": {
                templateUrl: "root/developProgress/_res/html/index.html",
                controller: "progressCtrl"
            },"nav@root":{
                templateUrl: "root/developProgress/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});