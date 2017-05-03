var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.biddingManagement", {
        url: "/biddingManagement",
        views: {
            "content@root": {
                templateUrl: "root/biddingManagement/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/biddingManagement/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});