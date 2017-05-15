var app = angular.module('incomeAccount',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.incomeAccount", {
        url: "/incomeAccount",
        views: {
            "content@root": {
                templateUrl: "root/incomeAccount/_res/html/index.html",
                controller: "incomeAccountCtrl"
            },"nav@root": {
                templateUrl: "root/incomeAccount/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})