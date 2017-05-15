var app = angular.module('assessment',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.assessment", {
        url: "/assessment",
        views: {
            "content@root": {
                templateUrl: "root/assessment/_res/html/index.html",
                controller: "assessmentCtrl"
            },"nav@root":{
                templateUrl: "root/assessment/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});