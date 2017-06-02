var app = angular.module('contract',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.businessContract", {
        url: "/businessContract",
        views: {
            "content@root": {
                templateUrl: "root/businessContract/_res/html/index.html",
                controller: "contractCtrl"
            },"nav@root":{
                templateUrl: "root/businessContract/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});