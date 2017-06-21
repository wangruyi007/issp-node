var app = angular.module('contractModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.businessContract", {
        url: "/businessContract",
        views: {
            "content@root": {
                templateUrl: "root/businessContract/_res/html/index.html",
                controller: "busContractCtrl"
            },"nav@root":{
                templateUrl: "root/businessContract/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});