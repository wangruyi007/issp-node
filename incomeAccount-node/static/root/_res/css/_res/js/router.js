var app = angular.module('projectmeasure',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.projectmeasure", {
        url: "/projectmeasure",
        views: {
            "content@root": {
                templateUrl: "root/projectmeasure/_res/html/index.html",
                controller: "projectmeasureCtrl"
            },"nav@root": {
                templateUrl: "root/projectmeasure/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})