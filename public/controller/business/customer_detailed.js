


function listCustomerDetail(){

    $.ajax({
        url:"/customer/customerdetail/listCustomerDetail",
        type:"get",
        success:function(data){
           listSuccess(data)

        },
        error:function(msg){
            console.info(msg);
        }
    })
}



//编辑
function editBtn(self){
    if($('section.selected').length>0){
        $('.content').children('.edit').fadeIn().siblings().hide();
        $(self).addClass('current').siblings().removeClass('current');
        var customerNum = $('section.selected .customerNum').text();
        var age = $('section.selected .age').text();
        var birthday = $('section.selected .birthday').text();
        var workExperience = $('section.selected .workExperience').text();
        var studyExperience = $('section.selected .studyExperience').text();
        var love = $('section.selected .love').text();
        var characterEvaluation = $('section.selected .characterEvaluation').text();

        cusBaseInfoSel("edit");
        var $edit =  $('.content-input.edit');
        $edit.find('.age').val(age);
        $edit.find('.birthday').val(birthday);
        $edit.find('.workExperience').val(workExperience);
        $edit.find('.studyExperience').val(studyExperience);
        $edit.find('.love').val(love);
        $edit.find('.characterEvaluation').val(characterEvaluation);


    }
}

function edit(){
    var data={};
    var $edit = $('.content-input.edit');
    var familyLen = $edit.find('.b-family ul').length;
    data.customerNum = $('.content-input.edit .boa-body .customerNum').val();
    data.age = $('.content-input.edit .boa-body .age').val();
    data.workExperience = $('.content-input.edit .boa-body .workExperience').val();
    data.studyExperience = $('.content-input.edit .boa-body .studyExperience').val();
    data.love = $('.content-input.edit .boa-body .love').val();
    data.characterEvaluation = $('.content-input.edit .boa-body .characterEvaluation').val();
    data.birthday = $edit.find('.birthday').val();
    // var cusFamilyMember=[];
    var _cusFamilyMemberTO={'title':$edit.find('.cusFamilyMemberVO-title ').val(),
        'name':$edit.find('.cusFamilyMemberVO-name ').val(),
        'relationWay':$edit.find('.cusFamilyMemberVO-relationWay ').val(),
        'charactLove':$edit.find('.cusFamilyMemberVO-charactLove ').val(),
        'workPlace':$edit.find('.cusFamilyMemberVO-workPlace ').val(),
        'jobPost':$edit.find('.cusFamilyMemberVO-jobPost ').val(),
    };

    var _strCusFamilyMemberTO = JSON.stringify(_cusFamilyMemberTO);
    var cusFamilyMember =new Array();
    cusFamilyMember.push(_strCusFamilyMemberTO);
    data.cusFamilyMemberTOLists = cusFamilyMember;




    console.info(data);
    $.ajax({
        url:"/customer/customerdetail/edit",
        type:"post",
        data:data,
        success:function(data){
            listCustomerDetail()
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').show().siblings().hide();
        },
        error:function(msg){
            console.info(msg);
        }
    })

}

//添加
function addBtn(self){
    $('.content-input.add').fadeIn().siblings().hide();
    $(self).addClass('current').siblings().removeClass('current');
    $.ajax({
        url:"/customer/customerbaseinfo/getCusNum",
        type:"get",
        success:function(data){
            if(data.data.length===0){
                return
            }else {
                var option="";
                $.each(data.data,function(index,cusNum){
                    option+="<option value='%{cusNum}'>%{cusNum}</option>".format({
                        cusNum:cusNum
                    })
                });
                $('.content-input.add .customerNum').html(option);
                cusBaseInfoSel("add")
            }

        },
        error:function(msg){

        }
    })
}

function add(){
    var data={};
    var $add = $('.content-input.add');
    data.customerNum = $('.content-input.add .customerNum').val();
    data.age = $('.content-input.add .age').val();
    data.birthday = $('.content-input.add .birthday').val();
    data.workExperience = $('.content-input.add .workExperience').val();
    data.studyExperience = $('.content-input.add .studyExperience').val();
    data.love = $('.content-input.add .love').val();
    data.characterEvaluation = $('.content-input.add .characterEvaluation').val();
    data.createTime = $('.content-input.add .createTime').val();
    data.modifyTime = $('.content-input.add .modifyTime').val();

    var _cusFamilyMemberTO={'title':$add.find('.cusFamilyMemberVO-title ').val(),
        'name':$add.find('.cusFamilyMemberVO-name ').val(),
        'relationWay':$add.find('.cusFamilyMemberVO-relationWay ').val(),
        'charactLove':$add.find('.cusFamilyMemberVO-charactLove ').val(),
        'workPlace':$add.find('.cusFamilyMemberVO-workPlace ').val(),
        'jobPost':$add.find('.cusFamilyMemberVO-jobPost ').val(),
    };

    var _strCusFamilyMemberTO = JSON.stringify(_cusFamilyMemberTO);
    var cusFamilyMember =new Array();
    cusFamilyMember.push(_strCusFamilyMemberTO);
    data.cusFamilyMemberTOLists = cusFamilyMember;

    $.ajax({
        url:"/customer/customerdetail/add",
        type:"POST",
        data:data,
        success:function(data){
            detailedCount()
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').show().siblings().hide();
        },
        error:function(msg){
            console.info(msg);
        }
    })

}

//客户编号选择
function cusBaseInfoSel(name){
    var cusNum;
    if(name==="add"){
        cusNum = $('.content-input.add .customerNum option:selected').val();
    }else if(name==="edit"){
       cusNum = $('section.selected .customerNum').text();
    }
    $.ajax({
        url:"/customer/customerbaseinfo/getCustomer",
        type:"post",
        data:{customerNum:cusNum},
        success:function(data){
            var item = data.data;
                    $('.content-input.'+name+' .customerNum').val(item.customerNum);
                    $('.content-input.'+name+' .customerLevelTO').val(item.customerLevelVO.name);
                    $('.content-input.'+name+' .customerType').val(cover(item.customerType));
                    $('.content-input.'+name+' .customerStatus').val(cover(item.customerStatus));
                    $('.content-input.'+name+' .origin').val(item.origin);
                    $('.content-input.'+name+' .relation').val(item.relation);
                    $('.content-input.'+name+' .customerName').val(item.customerName);
                    $('.content-input.'+name+' .customerSex').val(cover(item.customerSex));
                    $('.content-input.'+name+' .area').val(item.area);
                    $('.content-input.'+name+' .cusEmail').val(item.cusEmail);
                    $('.content-input.'+name+' .tel').val(item.tel);
                    $('.content-input.'+name+' .phone').val(item.phone);
                    $('.content-input.'+name+' .weChart').val(item.weChart);
                    $('.content-input.'+name+' .origanizion').val(item.origanizion);
                    $('.content-input.'+name+' .origanizationSize').val(item.origanizationSize);
                    $('.content-input.'+name+' .workPosition').val(item.workPosition);
                    $('.content-input.'+name+' .workRight').val(item.workRight);
                    $('.content-input.'+name+' .lifeArea').val(item.lifeArea);
                    $('.content-input.'+name+' .grouthArea').val(item.grouthArea);
                    $('.content-input.'+name+' .oldWorkPlace').val(item.oldWorkPlace);
                    $('.content-input.'+name+' .workLevel').val(item.workLevel);

        },
        error:function(msg){
            console.info(msg);
        }
    })
}

function cover(status){
    var result;
    switch(status){
        case "WOMAN":
            result = "女";
            break;
        case "MAN":
            result = "男";
            break;
        case "VIP":
            result = "VIP";
            break;
        case "OLD":
            result = "老客户";
            break;
        case "COOPERATOR":
            result = "合作伙伴";
            break;
        case "ORDINARY":
            result = "普通客户";
            break;
        case "COMPLETEPROJECT":
            result = "已完成项目客户";
            break;
        case "PROJECTING":
            result = "现项目客户";
            break;
        case "POTENTIAL":
            result = "潜在客户";
            break;
        case "THAW":
            result = "解冻";
            break;
        case "CONGEAL":
            result = "冻结";
            break;
        case "DELETE":
            result = "删除";
            break;
        case "NOACTIVE":
            result = "未激活";
            break;
        case "UNREVIEW":
            result = "未审核";
            break;
    }
    return result;

}


//删除
function deleted(){
    var id = $('section.selected .data-id').text();
    $.ajax({
        url:"/customer/customerdetail/delete",
        type:"POST",
        data:{id:id},
        success:function(data){
            $('section.selected').remove();
            $('.top-fixed .list li').eq(0).addClass('current').siblings().removeClass('current');
            $('.content .list').show().siblings().hide();
            $('#modalbg').hide();

        },
        error:function(msg){
            console.info(msg);
        }
    })
}


function  userDetail(self){
    if($('section.selected').length>0){
        $('.content-input.details').fadeIn().siblings().hide();
        var customerNum = $('section.selected .customerNum').text();
        console.info(customerNum);
        $(self).addClass('current').siblings().removeClass('current');
        $.ajax({
            url:"/customer/customerdetail/getInfoByCustomerNum",
            type:"POST",
            data:{customerNum:customerNum},
            success:function(data){
                console.info(data);
               var item = data.data;
               var $detail = $('.content-input.details');
                $detail.find($('.customerNum')).val(item.customerNum);
                $detail.find($('.age')).val(item.age);
                $detail.find($('.birthday')).val(item.birthday);
                $detail.find($('.workExperience')).val(item.workExperience);
                $detail.find($('.studyExperience')).val(item.studyExperience);
                $detail.find($('.love')).val(item.love);
                $detail.find($('.characterEvaluation')).val(item.characterEvaluation);
                $detail.find($('.customerLevelTO')).val(item.customerBaseInfoVO.customerLevelTO);
                $detail.find($('.customerType')).val(item.customerBaseInfoVO.customerType);
                $detail.find($('.customerStatus')).val(item.customerBaseInfoVO.customerStatus);
                $detail.find($('.origin')).val(item.customerBaseInfoVO.origin);
                $detail.find($('.relation')).val(item.customerBaseInfoVO.relation);
                $detail.find($('.customerName')).val(item.customerBaseInfoVO.customerName);
                $detail.find($('.customerSex')).val(item.customerBaseInfoVO.customerSex);
                $detail.find($('.area')).val(item.customerBaseInfoVO.area);
                $detail.find($('.cusEmail')).val(item.customerBaseInfoVO.cusEmail);
                $detail.find($('.tel')).val(item.customerBaseInfoVO.tel);
                $detail.find($('.phone')).val(item.customerBaseInfoVO.phone);
                $detail.find($('.weChart')).val(item.customerBaseInfoVO.weChart);
                $detail.find($('.origanizion')).val(item.customerBaseInfoVO.origanizion);
                $detail.find($('.origanizationSize')).val(item.customerBaseInfoVO.origanizationSize);
                $detail.find($('.customerLevelTO')).val(item.customerBaseInfoVO.customerLevelTO);
                $detail.find($('.workPosition')).val(item.customerBaseInfoVO.workPosition);
                $detail.find($('.workRight')).val(item.customerBaseInfoVO.workRight);
                $detail.find($('.lifeArea')).val(item.customerBaseInfoVO.lifeArea);
                $detail.find($('.grouthArea')).val(item.customerBaseInfoVO.grouthArea);
                $detail.find($('.oldWorkPlace')).val(item.customerBaseInfoVO.oldWorkPlace);
                $detail.find($('.workLevel')).val(item.customerBaseInfoVO.workLevel);

                var familyList="";

                $.each(data.data.cusFamilyMemberVOList,function(index,family){
                    familyList+=("<ul><li class='big'><label><em>称谓</em></label><input type='text' class='disabled' disabled value='%{title}'></li>" +
                        "<li class='big'><label><em>姓名</em></label><input type='text' class='disabled' disabled value='%{name}'></li>" +
                        "<li class='big'><label><em>联系方式</em></label><input type='text' class='disabled' disabled value='%{relationWay}'></li>" +
                        "<li class='big'><label><em>性格爱好</em></label><input type='text' class='disabled' disabled value='%{charactLove}'></li>" +
                        "<li class='big'><label><em>工作单位</em></label><input type='text' class='disabled' disabled value='%{workPlace}'></li>" +
                        "<li class='big'><label><em>职务</em></label><input type='text' class='disabled' disabled value='%{jobPost}'></li>" +
                        "</ul>").format({
                            title:family.title,
                            name:family.name,
                            relationWay:family.relationWay,
                            charactLove:family.charactLove,
                            workPlace:family.workPlace,
                            jobPost:family.jobPost,

                        });
                    $detail.find('.family').html(familyList);
                })

            },
            error:function(msg){
                console.info(msg);
            }
        })

    }

}



var detailedCount = function(){
    $.get('/customer/customerdetail/count',function(resdata){
        console.info(resdata);
        var count = resdata.data;
        var cusBasicPages =Math.ceil(count/10);
        laypage({
            cont: $('#pages'),  //容器。值支持id名、原生dom对象，jquery对象,
            pages: cusBasicPages, //总页数
            skin: 'molv', //皮肤
            first: 1, //将首页显示为数字1,。若不显示，设置false即可
            last: cusBasicPages, //将尾页显示为总页数。若不显示，设置false即可
            jump:function(obj){
                var curr = obj.curr;
                $.ajax({
                    url:'/customer/customerdetail/listCustomerDetail',
                    type:"post",
                    data:{page:curr},
                    success:function(data){
                        listSuccess(data)
                    },
                    error:function(msg){

                    }
                })
            }
        });
    });
};

detailedCount()
function listSuccess(data){
    if(data.data==null){
        return;
    }else {
        var list="";
        $.each(data.data,function(i,item){
            list += ("<section class='%{status}'><div class='list-text'><p>%{index}</p><p class='data-id'>%{id}</p><p class='customerNum'>%{customerNum}</p>" +
            "<p class='age'>%{age}</p><p class='birthday'>%{birthday}</p><p class='workExperience'>%{workExperience}</p>" +
            "<p class='studyExperience'>%{studyExperience}</p><p class='love'>%{love}</p><p class='characterEvaluation'>%{characterEvaluation}</p>" +
            "</div><div class='frozen-m'><button onclick='thaw(this)'>解冻</button></div></section>").format({
                index:i+1,
                id:item.id,
                customerNum:item.customerNum,
                age:item.age==null?"":item.age,
                birthday:item.birthday==null?"":item.birthday,
                workExperience:item.workExperience==null?"":item.workExperience,
                studyExperience:((item.studyExperience)==null?"":item.studyExperience),
                love:item.love==null?"":item.love,
                characterEvaluation:item.characterEvaluation==null?"":item.characterEvaluation
            });

        });

        $('.list-all').html(list);

    }

}





