var app = angular.module('measuredServer',[]);
app.factory('measuredSer',function ($http) {
    return {
        menuPermission : menuPermission,
        listMeasured : listMeasured,
        measuredAdd:measuredAdd,
        measuredEdit:measuredEdit,
        findMeasuredId:findMeasuredId,
        countMeasured:countMeasured,
        measuredDelete:measuredDelete,
        getType:getType,
        getCourse:getCourse,
        viewFiles:viewFiles
    };
    //菜单功能权限
    function menuPermission(data) {
        return $http.get('/marketmeasure/guidePermission/'+data);
    }
    //列表
    function listMeasured(data) {
        return $http.get('/market/marketmeasure/maps',{
            params: data

        })
    }
    //添加
    function measuredAdd(data){
        return $http.post('/market/marketmeasure/save',data)
    }
    //编辑
    function measuredEdit(data){
        return $http.post('/market/marketmeasure/update',data)
    }
    //id查询
    function findMeasuredId(data){
        return $http.get('/market/marketmeasure/findById',{
            params:data
        })
    }
    //分页总条数
    function countMeasured(){
        return $http.get('/market/marketmeasure/getTotal')
    }
    //删除
    function measuredDelete(data){

        return $http.get('/market/marketmeasure/delete',{
            params: data

        })
    }
    //获取业务类型
    function getType(){
        return $http.get('/businesstype/findThaw')
    }
    //获取业务方向科目数据
    function getCourse(){
        return $http.get('/businesscourse/findThaw')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/marketmeasure/listFile',{params:data})
    }
});
