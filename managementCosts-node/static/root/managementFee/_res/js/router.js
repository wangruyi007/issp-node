var app = angular.module('managementFee',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.managementFee", {
        url: "/managementFee",
        views: {
            "content@root": {
                templateUrl: "root/managementFee/_res/html/index.html",
                controller: "managementFeeCtrl"
            },"nav@root":{
                templateUrl: "root/managementFee/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});