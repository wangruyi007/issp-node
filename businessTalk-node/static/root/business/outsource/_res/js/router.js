var app = angular.module('outsource',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.business.outsource", {
        url: "/outsource",
        views: {
            "content@root": {
                templateUrl: "root/business/outsource/_res/html/index.html",
                controller: "outsourceCtrl"
            }
        }
    })
})