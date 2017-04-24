var app = angular.module('measuredServer',[]);
app.factory('measuredSer',function ($http) {
    return {
        listMeasured : listMeasured,
        measuredAdd:measuredAdd,
        measuredEdit:measuredEdit,
        findMeasuredId:findMeasuredId,
        countMeasured:countMeasured,
        measuredDelete:measuredDelete
    };
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
});
