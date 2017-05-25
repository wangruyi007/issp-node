var app = angular.module('recordAccount',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.recordAccount", {
        url: "/recordAccount",
        views: {
            "content@root": {
                templateUrl: "root/recordAccount/_res/html/index.html",
                controller: "recordAccountCtrl"
            },"nav@root":{
                templateUrl: "root/recordAccount/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});