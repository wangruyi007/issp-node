var app = angular.module('expressModel',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.express", {
        url: "/express",
        views: {
            "content@root": {
                templateUrl: "root/express/_res/html/index.html",
                controller: "expressCtrl"
            },"nav@root":{
                templateUrl: "root/express/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});
