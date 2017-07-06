/**
 * Created by hp1 on 2017/7/5.
 */
class Upload{
    constructor(url,fileobj,imgobj,progressobj,success){
        this.fileobj=fileobj;
        this.imgobj=imgobj;
        this.progressobj=progressobj;
        this.size=20*1024*1024;
        this.imgarr=["jpg","png","jpeg","gif"];
        this.url=url;
        this.success=success;
        this.file=0;
    }
    change(){
        let that=this;
        this.fileobj.onchange=function(){
            that.file=this.files[0];
            let fileread=new FileReader();
            fileread.readAsDataURL(that.file);
            fileread.onload=function(e){
                if(that.check()){
                    that.imgobj.src=e.target.result;
                    //上传服务器
                    that.uploadfile();
                }
            }
        }
    }
    check(){
        if(this.file.size>this.size){
            alert("文件过大");
            return false;
        }
        if(!this.imgarr.includes(this.file.name.split(".")[1])){
            alert("图片格式不正确");
            return false;
        }
        return true;
    }
    uploadfile(){
        let that=this;
        let ajax=new XMLHttpRequest();//实例化ajax
        let formdata=new FormData();//表单数据对象，自动组合键和值
        formdata.append('img',this.file);//可以自己添加属性
        ajax.upload.onloadstart=function(){
            //提交表单禁用
        };
        //进度
        ajax.upload.onprogress=function(e){
            let per=e.loaded/e.total*100;
            that.progressobj.style.width=per+'%';
        };
        //现在ajax没有完成，完成后做的事情
        ajax.onload=function () {
            console.log(ajax.responseText);
            that.success(ajax.responseText);//获取请求的内容
        };
        ajax.open('post',this.url,true);//发送
        ajax.send(formdata);
    }
}
let fileobj=document.querySelector(".fileobj");
let imgobj=document.querySelector(".img");
let progressobj=document.querySelector(".rect");
let imgurl=document.querySelector('#imgurl');
let obj=new Upload("newaddcontent.php",fileobj,imgobj,progressobj,function(text){
    imgurl.value=text;
});
obj.change();