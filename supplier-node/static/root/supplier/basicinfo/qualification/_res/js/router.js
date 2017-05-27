/**
 * Created by ike on 2017/5/3.
 */
var app = angular.module('qualificationBasic', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.supplier.basicinfo.qualification",{
        url:"/qualification?id=",
        views:{
            "content@root.supplier.basicinfo":{
                templateUrl : "root/supplier/basicinfo/qualification/_res/html/index.html",
                controller:'qualificationBasicCtrl'
            }
        }
    }).state("root.supplier.basicinfo.qualification.qualiDelete[12]",{
        url:"/qualiDelete[12]?suId=",
        views:{
            "modal@root.supplier.basicinfo.qualification":{
                templateUrl : "root/supplier/basicinfo/qualification/qualiDelete/_res/html/index.html",
                controller:'qualiDeleteCtrl'
            }
        }
    }).state("root.supplier.basicinfo.qualification.qualiEdit[12]",{
        url:"/qualiEdit[12]?suId=",
        views:{
            "content@root.supplier.basicinfo.qualification":{
                templateUrl : "root/supplier/basicinfo/qualification/qualiEdit/_res/html/index.html",
                controller:'qualiEditCtrl'
            }
        }
    })
});