/**
 * Created by hp1 on 2017/7/2.
 */
$().ready(function() {
    $(".aaa").validate({
        rules:{
            name:{
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
            repass:{
                required: true,
                equalTo: ".pass"
            },
        },
        messages:{
            name:{
                required:'必填',
                minlength:'用户名不能少于6个字符',
                remote:'用户名已存在'
            },
            pass:{
                required:'用户名不能为空',
                minlength:'密码不能少于6个字符'
            },
            repass:{
                required: '必填',
                equalTo: "两次密码输入不一致"
            },
        }
    });
    $("input").each(function (i) {
        $("input")[i].oninput = function () {
            if ($("input[type=text]").val() && $("input[type=password]").val()&& $("input[name='repass']").val()) {
                $(".zml-next1").addClass("first");
                $(".zml-next2").removeClass("first");
                $(".zml-next2").click(function () {
                    location.href = "reg1.html";
                })
            } else {
                $(".zml-next2").addClass("first");
                $(".zml-next1").removeClass("first");
            }
        };
    });
});