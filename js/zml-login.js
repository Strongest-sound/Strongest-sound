/**
 * Created by hp1 on 2017/7/2.
 */
$().ready(function(){
    $('.mui-input-group').validate({
        rules:{
            text:{
                required:true,
                minlength:6,
                remote:{
                    url:'checkname.php',
                    type:"post",
                    dataType:'json',
                    data:{username:function(){
                        return $('#account').val();
                    }}
                }
            },
            pass:{
                required:true,
                minlength:6
            },
            rpass:{
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            text:{
                required:'必填',
                minlength:'用户名不能少于6个字符',
                remote:'用户名已存在'

            },
            pass:{
                required:'用户名不能为空',
                minlength:'密码不能少于6个字符'
            },
            rpass:{
                required: '必填',
                minlength: 6,
                equalTo: "两次密码输入不一致"
            },
            email:{
                required:'必填',
                email:'请填写正确的email格式'
            }
        }
    });
});