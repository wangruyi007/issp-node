var app = angular.module('confirmView', ['toastr']);
app.controller('confirmViewCtrl', function($scope,confirmSer,$stateParams,toastr,$http,$state){

    var pathData ={id: $stateParams.id};
    $scope.isView = false;
    $scope.isChild = false;
    $scope.length = 1;
    if($stateParams.view == '1'){
        $scope.isChild = true;
    }else if($stateParams.view == '2'){
        $scope.isChild = false;

    }
    //获取附件列表
    confirmSer.confirmListFile(pathData).then(function(response){
        if(response.data.code== 0){
            $scope.encloMaterial = response.data.data;
            $scope.length = $scope.encloMaterial ? $scope.encloMaterial.length : 0;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //切换视图
    $scope.view  =function(){
        $scope.isChild = !$scope.isChild;//控制试图的出现
        $scope.isLength = 0;//让选择的功能样式清空
        angular.element('.checked-none').attr('checked',false);//清空全选框
            if($scope.encloMaterial){
            for(var i = 0; i < $scope.encloMaterial.length;i++){//清空所有的checked
                $scope.encloMaterial[i].checked = false;
            }
            if($stateParams.view == '1'){
                $state.go('root.projectProcessed.confirmProblem.view[12]',{view:'2'});
            }else if($stateParams.view == '2'){
                $state.go('root.projectProcessed.confirmProblem.view[12]',{view:'1'});
            }
        }
    };
    $scope.checkedSingle=false;
    $scope.checked=false;
    $scope.all= function (m) {//全选功能
        if(!$scope.length){return};
        $scope.isLength = m ? 0 : 1;
        if($scope.checked){
            $scope.checked = false;
        }else{
            $scope.checked = true;
        }
        if($scope.encloMaterial){
            for(var i=0;i<$scope.encloMaterial.length;i++){
                if(m===true){
                    $scope.encloMaterial[i].checked=false;
                }else {
                    $scope.encloMaterial[i].checked=true;
                    $scope.encloMaterial[i].checkedSingle=true;
                }
            }
        }
    };
    $scope.isLength = 0;//定义点击图片的个数
    $scope.checkedFun = function (obj) {
        if (obj.checked) {
            obj.checked = false;
            $scope.checkedSingle = false;
        }else{
            obj.checked = true;
            $scope.checkedSingle = true;
        }
        var checkAllCount = 0;
        for(var i =0,len=$scope.encloMaterial.length;i<len;i++){
            if($scope.encloMaterial[i]['checked']){
                checkAllCount++;
            }
        }
        if(checkAllCount==$scope.encloMaterial.length){
            $scope.checked= true;
        }else{
            $scope.checked=false;
        }
        $scope.isLength = checkAllCount;
    };

    $scope.fn = function(){//下载
        for(var i=0,len=$scope.encloMaterial.length;i<len;i++){
            if($scope.encloMaterial[i].checked){
                var obj = {
                path:$scope.encloMaterial[i].path,
                fileType:$scope.encloMaterial[i].fileType
            };
            console.log(obj)
            var iframe = document.createElement('iframe');

            iframe.src=`/confirmDownloadFile/downloadFile${encode(obj,true)}`;

            iframe.style.display = 'none';

            document.body.appendChild(iframe);
            }
        }
        setTimeout(function(){

            var iframe = document.getElementsByTagName('iframe');

            for(var i= 0;i<iframe.length;i++){

                iframe[i].parentNode.removeChild(iframe[i]);

            }

        },1000);
    };
    //删除文件
    $scope.del = function(){
        if($scope.isLength){
            $scope.delShow = true;
        }
    };
    
    $scope.delFn = function(){
        var delNum = [];//记录删除数组的下标
        var data = {
            path: $scope.path
        };
        var fd = new FormData();
        for(let i=0,len=$scope.encloMaterial.length;i<len;i++){
            if($scope.encloMaterial[i].checked){
                console.log($scope.encloMaterial[i].path)
                fd.append('paths', $scope.encloMaterial[i].path);
                delNum.push(i);
            }
            $scope.encloMaterial[i].checked = false;
        }
          $http({
                method: 'POST',
                url: '/confirmDeleteFile/deleteFile',
                headers: {
                    'Content-Type': undefined
                },
                data: fd,
                transformRequest: function (data, headersGetter) {
                    var formData = new FormData();
                    angular.forEach(data, function (value, key) {
                        formData.append(key, value);
                    });
                    return formData;
                }
            }, function (data) {
                console.info(data);
            }).then(function (response) {
                if (response.data.code == 0) {
                    toastr.success('成功删除文件','温馨提示');
                    $scope.delShow = false;
                    for(var i = 0;i<delNum.length;i++){
                        $scope.encloMaterial[delNum[i]].delel = true;
                        $scope.length--;
                    }
                    if(!$scope.length){
                        angular.element('.checked-none[data-style="checked"]:checked + label').css('background','none')
                    }
                    $scope.isLength = 0;//控制样式
                } else {
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
    };
     //样式
    $scope.sortCur = {current: "1"};
    $scope.actions = {setCurrent: function (param) {$scope.sortCur.current = param;}};
    $scope.ifIf = false;
    $scope.sortSize = function() {
        var sortArr = $scope.encloMaterial;
        $scope.sortIsAsc = !$scope.sortIsAsc;
        sortArr.sort(function des(a, b) {
            if ($scope.sortIsAsc) {
                var temp1 = a.name;
                var temp2 = b.name;
                if (temp1 < temp2) {
                    return -1;
                } else if (temp1 == temp2) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                var temp1 = a.name;
                var temp2 = b.name;
                if (temp1 < temp2) {
                    return 1;
                } else if (temp1 == temp2) {
                    return 0;
                } else {
                    return -1;
                }
            }
        });
    };
    $scope.sortSize2 = function() {
        var sortArr = $scope.encloMaterial;
        $scope.sortIsAsc = !$scope.sortIsAsc;
        sortArr.sort(function des(a, b) {
            if ($scope.sortIsAsc) {
                var temp1 = parseInt(a.length);
                var temp2 = parseInt(b.length);
                if (temp1 < temp2) {
                    return -1;
                } else if (temp1 == temp2) {
                    return 0;
                } else {
                    return 1;
                }
            }else{
                var temp1 = parseInt(a.length);
                var temp2 = parseInt(b.length);
                if (temp1 < temp2) {
                    return 1;
                } else if (temp1 == temp2) {
                    return 0;
                } else {
                    return -1;
                }
            }
        });
    };
    $scope.sortTime = function() {
        var sortArr = $scope.encloMaterial;
        $scope.sortIsAsc = !$scope.sortIsAsc;
        sortArr.sort(function des(a, b) {
            if ($scope.sortIsAsc) {
                var temp1 = new Date(a.modifyTime).getTime();
                var temp2 = new Date(b.modifyTime).getTime();
                if (temp1 < temp2) {
                    return -1;
                } else if (temp1 == temp2) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                var temp1 = new Date(a.modifyTime).getTime();
                var temp2 = new Date(b.modifyTime).getTime();
                if (temp1 < temp2) {
                    return 1;
                } else if (temp1 == temp2) {
                    return 0;
                } else {
                    return -1;
                }
            }
        });
    };
});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}
app.filter('coverStorage',function(){
    return function(val){
        var result = 'B';
        var value = val;
        if(val>=1099511627776){
            result = 'TB';
            value = (val/1099511627776).toFixed(2);
        }else if(val>=1073741824){
            result = 'GB';
            value = (val/1073741824).toFixed(2);
        }else if(val>=1048576){
            result = 'MB';
            value = (val/1048576).toFixed(2);
        }else if(val>=1024){
            result = 'KB';
            value = (val/1024).toFixed(2);
        }
        return value+result;
    }
});
app.filter('cov',function(){
    return function(val){
        var result;
        switch (val){
            case 'PNG':
                result = 'png';
                break;
            case 'JPG':
                result = 'jpg';
                break;
            case 'XLS':
                result = "XLS";
                break;
            case 'HTML':
                result = 'HTML';
                break;
            case 'XLSX':
                result = "XLSX";
                break;
            case 'PDF':
                result = 'PDF';
                break;
            case 'TXT':
                result = "TXT";
                break;
            case 'SRT':
                result = 'SRT';
                break;
            case 'UNKNOW':
                result = "UNKNOW";
                break;
            case 'PPTX':
                result = 'PPTX';
                break;
            case 'ZIP':
                result = "ZIP";
                break;
            case 'RAR':
                result = 'RAR';
                break;
            default:
                result = "other";
                break;
        }
        return '/images/' + result + '.png';
    };
});