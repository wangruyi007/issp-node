var app = angular.module('supplier',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.supplier", {
        url: "/supplier",
        views: {
            "content@root": {
                templateUrl: "root/supplier/_res/html/index.html",
                controller: "supplierCtrl"
            },"nav@root":{
                templateUrl: "root/supplier/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});