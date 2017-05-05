var app = angular.module('person', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.person", {
        url : "/person",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/person/_res/html/index.html",
                controller:"personCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/person/_res/html/menu.html",
                controller:"personMenuCtrl"
            }
        }
    }).state("root.organize.management.person.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management.person" : {
                templateUrl : "root/organize/management/person/add/_res/html/index.html",
                controller:"personAddCtrl"
            }
        }
    }).state("root.organize.management.person.edit[12]", {
        url : "/edit[12]",
        views : {
            "content@root.organize.management.person" : {
                templateUrl : "root/organize/management/person/edit/_res/html/index.html",
                controller:"personEditCtrl"
            }
        }
    }).state("root.organize.management.person.view[12]", {
        url : "/view[12]",
        views : {
            "content@root.organize.management.person" : {
                templateUrl : "root/organize/management/person/view/_res/html/index.html",
                controller:"personViewCtrl"
            }
        }
    })
});

