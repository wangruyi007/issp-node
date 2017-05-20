var app = angular.module('interact',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.businessInteraction", {
        url: "/businessInteraction",
        views: {
            "content@root": {
                templateUrl: "root/businessInteraction/_res/html/index.html",
                controller: "interactCtrl"
            },"nav@root":{
                templateUrl: "root/businessInteraction/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});