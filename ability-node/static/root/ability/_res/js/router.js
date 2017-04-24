var app = angular.module('ability',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.ability", {
        url: "/ability",
        views: {
            "content@root": {
                templateUrl: "root/ability/_res/html/index.html",
                controller: "abilityCtrl"
            },"nav@root": {
                templateUrl: "root/ability/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})