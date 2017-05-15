var app = angular.module('payable',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.payable", {
        url: "/payable",
        views: {
            "content@root": {
                templateUrl: "root/payable/_res/html/index.html",
                controller: "payableCtrl"
            },"nav@root":{
                templateUrl: "root/payable/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});