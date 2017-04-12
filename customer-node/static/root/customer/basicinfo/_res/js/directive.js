var app = angular.module('basicinfoDir',[{
    laypsge:[ "/common/laypage/laypage.js"]
}]);

app.directive('editdir',function($state){
    return{
        restrict: 'EA',
        link : function(scope, element, attrs) {
            $(element).click(function(){
                if($('.list-text.selectList').length>0){
                    var customerNum = $('.list-text.selectList .addcusNum').text();
                    $state.go('root.customer.basicinfo.edit[12]',{cusNum:customerNum})
                }else {
                    return
                }
            })
        }
    }
}).directive('congealdir',function($state){
    return{
        restrict: 'EA',
        link : function(scope, element, attrs) {
            $(element).click(function(){
                if($('.list-text.selectList').length>0){
                    $('.list-text.selectList').parent().find('.freeze').show();
                    $('#modalbg').show()
                }else {
                    return
                }
            })
        }
    }
}).directive('congealsuc',function($state){
    return{
        restrict: 'EA',
        link : function(scope, element, attrs) {
            $(element).click(function(){
                $(element).parents('.freeze').hide();
                $('#modalbg').hide()
                // $(element).parents('.list-all section').addClass('congeal').children('.list-text').removeClass('selectList')
            })
        }
    }
}).directive('deletedir',function($state){
    return{
        restrict: 'EA',
        link : function(scope, element, attrs) {
            $(element).click(function(){
                if($('.list-text.selectList').length>0){
                    $('.list-text.selectList').parent().find('.delete').show();
                    $('#modalbg').show()
                }else {
                    return
                }
            })
        }
    }
}).directive('deletesuc',function($state){
    return{
        restrict: 'EA',
        link : function(scope, element, attrs) {
            $(element).click(function(){
                $(element).parents('.delete').hide();
                $('#modalbg').hide()
            })
        }
    }
}).directive('cancel',function($state){
    return{
        restrict: 'EA',
        link : function(scope, element, attrs) {
            $(element).click(function(){
                $(element).parents('.mod').hide();
                $('#modalbg').hide()
            })
        }
    }
})