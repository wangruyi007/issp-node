var app = angular.module('projectModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectRoyalty", {
        url: "/projectRoyalty",
        views: {
            "content@root": {
                templateUrl: "root/projectRoyalty/_res/html/index.html",
                controller: "projectRoyaltyCtrl"
            },"nav@root":{
                templateUrl: "root/projectRoyalty/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});