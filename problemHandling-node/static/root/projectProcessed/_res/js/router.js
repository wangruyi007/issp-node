var app = angular.module('processed',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectProcessed", {
        url: "/projectProcessed",
        views: {
            "content@root": {
                templateUrl: "root/projectProcessed/_res/html/index.html",
                controller: "processedCtrl"
            },"nav@root":{
                templateUrl: "root/projectProcessed/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});