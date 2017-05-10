var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表 币别
   this.currencyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/currency/v1/listCurrency?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.currencyCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/currency/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.currencyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/currency/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.currencyById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/currency/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.currencyEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/currency/v1/edit?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除 
    this.currencyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/currency/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
        };
        return request(options);
    };

    //列表 一级科目设置
   this.firstsubjectList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/firstsubject/v1/listFirstSubject?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.firstsubjectCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/firstsubject/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.firstsubjectAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/firstsubject/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.firstsubjectById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/firstsubject/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.firstsubjectEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/firstsubject/v1/edit?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除 
    this.firstsubjectDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/firstsubject/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
        };
        return request(options);
    };

                        //  类别
    //资产类
    this.sortList= function(argvs){
        var options = {  
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/listCategory?limit=10&categoryName=${argvs.categoryName}&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.sortCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/count?categoryName=${argvs.categoryName}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.sortAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取一级列表
    this.firstList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/listFirstName?categoryName=${argvs.categoryName}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.sortById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.sortEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/edit?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除 
    this.sortDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/category/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
        };
        return request(options);
    };

    //账户来源
    this.accountList= function(argvs){
        var options = {  
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/listAccount?limit=10&categoryName=${argvs.categoryName}&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.accountCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/count?categoryName=${argvs.categoryName}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.accountAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取二级列表
    this.SecondList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/listSecondCategory?firstSubject=${encodeURIComponent(argvs.firstSubject)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取三级列表
    this.ThirdList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/listThirdCategory?firstSubject=${encodeURIComponent(argvs.firstSubject)}&secondSubject=${encodeURIComponent(argvs.secondSubject)}`,   
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.accountById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.accountEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/edit?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除 
    this.accountDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/account/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
        };
        return request(options);
    };
    //获取所有的一级科目
    this.allFirstsubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/firstsubject/v1/listAllFirst`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    return this;
};