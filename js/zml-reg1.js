/**
 * Created by hp1 on 2017/7/2.
 */
$().ready(function() {
    $('.mui-input-group').validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            tel:{
                required:true,
                digits:true,
                minlength:11,
                maxlength:11,
                range:[0,999999999999]
            }
        },
        messages:{
            email:{
                required:'必填',
                email:'请填写正确的email格式'
            },
            tel:{
                required:'必填',
                digits:"请输入正确手机号",
                minlength:"请输入正确手机号",
                maxlength:"请输入正确手机号",
                range:"请输入正确手机号",
            }
        }
    });
    $("input").each(function (i) {
        $("input")[i].oninput = function () {
            if ($("input[type=email]").val() && $("input[type=tel]").val()) {
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
