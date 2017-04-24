/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('basicinfoList', []);
app.controller('basicinfoListCtrl',['$scope', function($scope) {
    $scope.infoList = [
        {
            title: '预期年化收益率',
            p2p: '商量',
        },
        {
            title: '买入当天生息',
            p2p: '好的',
        }
    ];
}]);
