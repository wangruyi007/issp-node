var app = angular.module('assessment', [{
    files: ['root/assessment/_res/js/service.js']
}]);
app.controller('assessmentCtrl', function ($scope,$state) {
    if ($state.current.url == '/assessment') {//默认加载列表
        $state.go('root.assessment.basicInfo');
    }
    $scope.$on('changeId',function(event,msg) {
        $scope.$broadcast('getId', msg)
    });
}).controller('navCtrl',function($scope,$state,$location,basicSer){
    $scope.navCla='basicInfo';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'basicInfo';
    $scope.navClass = function(name){
        $scope.navCla = name;
    };
    basicSer.navPermission().then(function(response){
          console.log(response);
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    basicSer.setPermission().then(function(response){
        console.log(response);
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
    $scope.showsList = [
        {id:"1",item:"商务评估",menuList:[{name:'项目基本信息'}],showIs:true},
        {id:"2",item:"项目成本",menuList:[{name1:'需求成本'},{name2:'劳动成本'},{name3:'其他成本'}],showIs:true},
        {id:"3",item:"项目费用",menuList:[{name4:'项目费用'}],showIs:true},
        {id:"4",item:"项目利润率",menuList:[{name5:'项目利润率'}],showIs:true},
        {id:"5",item:"项目成长能力",menuList:[{name6:'成本成长能力'}],showIs:true},
        {id:"6",item:"市场反应和创新能力",menuList:[{name7:'基本信息'},{name8:'项目问题受理和处理'}],showIs:true},
        {id:"7",item:"输出评估结果",menuList:[{name9:'项目金额'},{name10:'项目成长能力'},{name11:'项目利润率'},{name12:'市场反应和能力创新'},{name13:'客户关系指标'}],showIs:true},
        {id:"8",item:"内部评估",menuList:[{name14:'一线实施体系评价'},{name15:'商务负责人评价'},{name16:'项目负责人评价'}],showIs:true},
        {id:"9",item:"商务评估结果汇总",menuList:[{name17:'商务评估结果汇总'}],showIs:true},
        {id:"10",item:"设置",menuList:[{name18:'设置'}],showIs:true}
    ];
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };
});

app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});
