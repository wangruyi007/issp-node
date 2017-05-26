var app = angular.module('payment',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.payment", {
        url: "/payment",
        views: {
            "content@root": {
                templateUrl: "root/payment/_res/html/index.html",
                controller: "paymentCtrl"
            },"nav@root":{
                templateUrl: "root/payment/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});