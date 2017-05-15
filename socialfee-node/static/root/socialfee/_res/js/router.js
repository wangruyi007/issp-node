var app = angular.module('socialfee1',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.socialfee", {
        url: "/socialfee",
        views: {
            "content@root": {
                templateUrl: "root/socialfee/_res/html/index.html",
                controller: "socialfee1Ctrl"
            },"nav@root": {
                templateUrl: "root/socialfee/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})