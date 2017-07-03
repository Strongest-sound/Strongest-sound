/**
 * Created by hp1 on 2017/7/3.
 */
$(function(){
    $('.zml-bottom-middle > ul > li').on("touchstart",function(e){
        let str=$(this).children().eq(0).html();
        if($(".zml-selectres").length<4){
            $("<li class='zml-selectres'>").html(str).appendTo('.zml-select');
        }
    })
})