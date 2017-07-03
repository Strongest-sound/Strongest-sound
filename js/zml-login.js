/**
 * Created by hp1 on 2017/7/2.
 */
$().ready(function(){
    let flag1=true;
    let flag2=true;
    function getstyle(card1,card2,content){
        $(card1).on("touchstart",function(){
            if(flag1){
                flag1=false;
                // console.log($(content));
                $(card1).eq(1).addClass('first');
                $(card1).eq(0).removeClass('first');
                $(card2).eq(1).addClass('first');
                $(card2).eq(0).removeClass('first');
                $(content).removeClass("first");
                $(content).eq(1).addClass('first');
                flag2=true;
            }
        });
        $(card2).on("touchstart",function(){
            if(flag2){
                flag2=false;
                $(card1).eq(0).addClass('first');
                $(card1).eq(1).removeClass('first');
                $(card2).eq(0).addClass('first');
                $(card2).eq(1).removeClass('first');
                $(content).removeClass("first");
                $(content).eq(0).addClass("first");
                flag1=true;
            }
        });
    }
    getstyle(".zml-denglu div span:nth-child(1) img",".zml-denglu div span:nth-child(2) img",".zml-tianxie");
    $("input").each(function(i){
        $("input")[i].oninput = function() {
            if($("input[type=text]").val()&&$("input[type=password]").val()){
                $(".zml-login1").addClass("first");
                $(".zml-login2").removeClass("first");
                $(".zml-login2").click(function(){
                    $(".zml-login2").addClass("first");
                    $(".zml-login3").removeClass("first");
                    setTimeout(function(){
                        location.href="index.html";
                    },2000);
                })
            }


        };
    });
});