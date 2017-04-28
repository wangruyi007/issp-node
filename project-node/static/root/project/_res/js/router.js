var app = angular.module('project',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.project", {
        url: "/project",
        views: {
            "content@root": {
                templateUrl: "root/project/_res/html/index.html",
                controller: "projectCtrl"
            },"nav@root": {
                templateUrl: "root/project/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})