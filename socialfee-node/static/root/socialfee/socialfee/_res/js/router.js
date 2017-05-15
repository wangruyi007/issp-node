var app = angular.module('socialfee',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.socialfee.socialfee", {
        url: "/socialfee",
        views: {
            "content@root.socialfee": {
                templateUrl: "root/socialfee/socialfee/_res/html/index.html",
                controller: "socialfeeCtrl"
            }
        }
    })
})