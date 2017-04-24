var app = angular.module('progress',[]);
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