var app = angular.module('jopdetail', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.jopdetail", {
        url : "/jopdetail",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/jopdetail/_res/html/index.html",
                controller:"jopdetailCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/jopdetail/_res/html/menu.html",
                controller:"jopdetailMenuCtrl"
            }
        }
    }).state("root.organize.management.jopdetail.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.jopdetail" : {
                templateUrl : "root/organize/management/jopdetail/add/_res/html/index.html",
                controller:"jopdetailAddCtrl"
            }
        }
    }).state("root.organize.management.jopdetail.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.jopdetail" : {
                templateUrl : "root/organize/management/jopdetail/edit/_res/html/index.html",
                controller:"jopdetailEditCtrl"
            }
        }
    }).state("root.organize.management.jopdetail.view[12]", {
        url : "/view[12]",
        views : {
            "content@root.organize.management.jopdetail" : {
                templateUrl : "root/organize/management/jopdetail/view/_res/html/index.html",
                controller:"jopdetailViewCtrl"
            }
        }
    })
});

