var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function () {
    /*******编号设计*********/
    this.numberList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/designNumberInfo/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.numberCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + "/designNumberInfo/v1/getTotal",
        };
        return request(options);
    };
    this.numberAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + "/designNumberInfo/v1/save",
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.numberEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/designNumberInfo/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.numberGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/designNumberInfo/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.numberDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/designNumberInfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };

    /*******体系*******/
    this.systemList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/hierarchy/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.systemCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/hierarchy/v1/getTotal',
        };
        return request(options);
    };
    this.systemAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/hierarchy/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.systemGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/hierarchy/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.systemEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/hierarchy/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.systemDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/hierarchy/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.systemCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/hierarchy/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.systemThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/hierarchy/v1/thaw/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /*******部门*******/
    this.departmentList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.departmentCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/departmentDetail/v1/getTotal',

        };
        return request(options);
    };
    this.departGetSystem = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/hierarchy/v1/findStatus',

        };
        return request(options);
    };
    this.departmentAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/departmentDetail/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.departmentGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.departmentEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.departmentDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.departmentCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.departmentThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/thaw/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /*******岗位层级******/
    this.postlevelList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/arrangement/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.postlevelCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/arrangement/v1/getTotal',

        };
        return request(options);
    };
    this.postlevelParent = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/arrangement/v1/findStatus',

        };
        return request(options);
    };
    this.postlevelAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/arrangement/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.postlevelGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/arrangement/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.postlevelDel = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/arrangement/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /*******岗位******/
    this.postsList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.postsCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/positionDetail/v1/getTotal',

        };
        return request(options);
    };
    this.getDepartList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/departmentDetail/v1/maps?_includes=id,department',
        };
        return request(options);

    };
    this.getArrangement = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/arrangement/v1/findStatus?_includes=arrangement,id',

        };
        return request(options);
    };
    this.getModule = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/moduletype/v1/findThaw',
        };
        return request(options);
    };
    this.postsAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/positionDetail/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.postsGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.postsEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.postsDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.postsCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.postsThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/thaw/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.getAngle = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/angle/v1/findStatus',
        };
        return request(options);
    };
    this.getDimension = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/dimension/v1/findStatus',
        };
        return request(options);
    };
    this.getClassify = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/instructionClassify/v1/findStatus',
        };
        return request(options);
    };
    this.getReflect = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/reflect/v1/findStatus',
        };
        return request(options);
    };
    this.getOperate = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/operate/v1/findStatus',
        };
        return request(options);
    };
    this.getPostId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positionDetail/v1/findById/${argvs.id}?_includes=serialNumber,id`,
        };
        return request(options);
    };
    this.explainAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/positionInstruction/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.getPostsDetail = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positionInstruction/v1/findByPosition/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };

    this.motypeList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/moduletype/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.motypeCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/moduletype/v1/getTotal',
        };
        return request(options);
    };
    this.motypeAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/moduletype/v1/save',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    /**操作类型列表**/
    this.operateList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/operate/v1/maps?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //操作类型总条数
    this.operateCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/operate/v1/getTotal'
        };
        return request(options);
    };
    //操作类型添加
    this.operateAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/operate/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.motypeGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/moduletype/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.motypeEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/moduletype/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //获取操作类型Id
    this.operateGetId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/operate/v1/findById/${argvs.id}`
        };
        return request(options);
    };
    //操作类型编辑
    this.operateEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/operate/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };

    this.motypeDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/moduletype/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.motypeCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/moduletype/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.motypeThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/moduletype/v1/thaw/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //操作类型删除
    this.operateDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/operate/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //操作类型冻结
    this.operateCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/operate/v1/close/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //操作类型解冻
    this.operateThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/operate/v1/open/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /**角度列表**/
    this.angleList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/angle/v1/maps?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //角度总条数
    this.angleCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/angle/v1/getTotal'
        };
        return request(options);
    };
    //角度添加
    this.angleAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/angle/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    //获取角度Id
    this.angleGetId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/angle/v1/findById/${argvs.id}`
        };
        return request(options);
    };
    //角度编辑
    this.angleEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/angle/v1/update/${argvs.id}`,
            form: argvs
        };
        return request(options);
    };
    //角度删除
    this.angleDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/angle/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //角度冻结
    this.angleCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/angle/v1/close/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //角度解冻
    this.angleThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/angle/v1/open/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /**维度列表**/
    this.dimenList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dimension/v1/maps?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //维度总条数
    this.dimenCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/dimension/v1/getTotal'
        };
        return request(options);
    };
    //维度添加
    this.dimenAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/dimension/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    //获取维度Id
    this.dimenGetId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/dimension/v1/findById/${argvs.id}`
        };
        return request(options);
    };
    //维度编辑
    this.dimenEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/dimension/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    //维度删除
    this.dimenDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/dimension/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //维度冻结
    this.dimenCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/dimension/v1/close/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //维度解冻
    this.dimenThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/dimension/v1/open/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /**分类列表**/
    this.classifyList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/instructionClassify/v1/maps?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //分类总条数
    this.classifyCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/instructionClassify/v1/getTotal'
        };
        return request(options);
    };
    //分类添加
    this.classifyAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/instructionClassify/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    //获取分类Id
    this.classifyGetId = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/instructionClassify/v1/findById/${argvs.id}`
        };
        return request(options);
    };
    //分类编辑
    this.classifyEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/instructionClassify/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    //分类删除
    this.classifyDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/instructionClassify/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //分类冻结
    this.classifyCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/instructionClassify/v1/close/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //分类解冻
    this.classifyThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/instructionClassify/v1/open/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.userjopMaps = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positiondetailuser/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.userjopCount = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/positiondetailuser/v1/getTotal',
        };
        return request(options);
    };
    this.getUser = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/positiondetailuser/v1/findUserList',
        };
        return request(options);
    };
    this.getPosition = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/positionDetail/v1/findStatus?_includes=id,position',
        };
        return request(options);
    };
    this.userjopAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/positiondetailuser/v1/save',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.userjopGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positiondetailuser/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.userjopEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/positiondetailuser/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.userjopDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/positiondetailuser/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.joprangeMaps = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.joprangeCounts = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/workRange/v1/getTotal',
        };
        return request(options);
    };
    this.joprangeAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/workRange/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };
    this.joprangeDelete = function (argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.joprangeCongeal = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/close/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.joprangeThaw = function (argvs) {
        var options = {
            method: 'PATCH',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/open/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.getDirection = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/workRange/v1/findDirection',
        };
        return request(options);
    };
    this.getProject = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/workRange/v1/findProject',
        };
        return request(options);
    };
    this.findClassify = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/workRange/v1/findClassify',
        };
        return request(options);
    };
    this.joprangeGet = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.joprangeEdit = function (argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/workRange/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    /*******岗位说明******/
    this.jopDesList = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/positionInstruction/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.getJopDesCountId = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + "/positionInstruction/v1/getTotal",
        };
        return request(options);
    };
    this.departmentGetById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/departmentDetail/v1/maps?_includes=department,id`,
        };
        return request(options);
    };
    this.jopDesAdd = function (argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/positionInstruction/v1/save',
            headers:{
                userToken:argvs.token
            },
            form: argvs
        };
        return request(options);
    };

    this.arrangementGetById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/arrangement/v1/maps?_includes=arrangement,id`,
        };
        return request(options);
    };
    this.hierarchyGetById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/hierarchy/v1/maps?_includes=hierarchy,id',
        };
        return request(options);
    };
    this.positionGetById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + "/positionDetail/v1/findStatus?_includes=position,id,serialNumber,positionName,pool,staff,hierarchyName,arrangementName,departmentName",
        };
        return request(options);
    };
    this.jopDesGetById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionInstruction/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.jopDesEdit = function(argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/positionInstruction/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.jopDesDelete = function(argvs) {
        var options = {
            method: 'DELETE',
            timeout: 3000,
            uri: config()['rurl'] + `/positionInstruction/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    /*******岗位工作明细******/
    this.jopDetailList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionWorkDetail/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.getJopDetailCountId = function(){
        var options = {
            method : 'GET',
            timeout : 3000,

            uri : config()['rurl'] + "/positionWorkDetail/v1/getTotal",

        };
        return request(options);
    };
    this.getPosiInst = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/positionInstruction/v1/maps?_includes=id,positionName",
        };
        return request(options);
    };
    this.jopdetailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + "/positionWorkDetail/v1/save",
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.jopdetailGet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionWorkDetail/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.jopdetailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/positionWorkDetail/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.jopdetailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/positionWorkDetail/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.getReflectCountId = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/reflect/v1/getTotal",
        };
        return request(options);
    };
    this.reflectList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reflect/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.reflectAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/reflect/v1/save',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.reflectGetById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/reflect/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.reflectEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/reflect/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.reflectCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/reflect/v1/close/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.reflectThaw = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/reflect/v1/open/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.reflectDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/reflect/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.departRange = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/workRange/v1/findThawOpinion',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.viewRange = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/workRange/v1/findByDepartment?departmentId=${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.positionuser = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positiondetailuser/v1/findById/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };

    return this;


};
