window.onload=function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    var list=$(".pinglunliebiao>li");
    list.forEach(function(value,index){
    	$(value).css("opacity",(list.length-index)/list.length);
    })
    
    //播放
    var select=0;
    var geci=document.querySelector(".geci");
    var img=$(".mx_top>div>ul.swiper-wrapper>li");
    var fleg=false;  //控制是否随机播放的开关
    var	currentTime=5;
    var musics=[
	{id:'$1',name:'遇见你',who:'牛奶咖啡',src:'../music/牛奶咖啡 - 遇见你.mp3',zhuanji:'遇见你',bigimg:'../img/big-1.jpg',img:'../img/thumb.jpg',geci:[
{time:"00:00",value1:" 遇见你 (《因为遇见你》电视剧插曲) - 牛奶咖啡"},
{time:"00:03",value1:" 词：小乔"},
{time:"00:04",value1:" 曲：格非"},
{time:"00:04",value1:" 监制：杨剑"},
{time:"00:19",value1:" 若不是 遇见你"},
{time:"00:25",value1:" 现在的我会在哪里"},
{time:"00:29",value1:" 忽然间飘来了细雨"},
{time:"00:34",value1:" 淋湿了我的 思绪"},
{time:"00:38",value1:" 若不是 遇见了你"},
{time:"00:43",value1:" 故事会怎样 继续"},
{time:"00:47",value1:" 午夜最后一班列车"},
{time:"00:52",value1:" 为什么不小心错过"},
{time:"00:56",value1:" 也许是命中注定"},
{time:"01:01",value1:" 却总会 措手不及"},
{time:"01:06",value1:" 像一颗流星 在一瞬间"},
{time:"01:12",value1:" 深深 划过漆黑的夜"},
{time:"01:15",value1:" 就这样遇见了你"},
{time:"01:19",value1:" 多么像一个奇迹"},
{time:"01:24",value1:" 你静静站在那里"},
{time:"01:28",value1:" 人群中如此美丽"},
{time:"01:33",value1:" 就这样遇见了你"},
{time:"01:37",value1:" 似曾相识的梦境"},
{time:"01:42",value1:" 不愿把彼此唤醒"},
{time:"01:46",value1:" 只想要慢慢靠近"},
{time:"01:51",value1:" 慢慢靠近"},
{time:"02:09",value1:" 若不是 遇见了你"},
{time:"02:13",value1:" 现在的我会在哪里"},
{time:"02:18",value1:" 忽然间飘来了细雨"},
{time:"02:22",value1:" 淋湿了我的 思绪"},
{time:"02:27",value1:" 若不是 遇见了你"},
{time:"02:32",value1:" 故事会怎样 继续"},
{time:"02:36",value1:" 午夜最后一班列车"},
{time:"02:41",value1:" 为什么不小心错过"},
{time:"02:45",value1:" 也许是命中注定"},
{time:"02:50",value1:" 却总会 措手不及"},
{time:"02:55",value1:" 像一颗流星 在一瞬间"},
{time:"03:00",value1:" 深深 划过漆黑的夜"},
{time:"03:03",value1:" 就这样遇见了你"},
{time:"03:08",value1:" 多么像一个奇迹"},
{time:"03:12",value1:" 你静静站在那里"},
{time:"03:17",value1:" 人群中如此美丽"},
{time:"03:21",value1:" 就这样遇见了你"},
{time:"03:26",value1:" 似曾相识的梦境"},
{time:"03:30",value1:" 不愿把彼此唤醒"},
{time:"03:35",value1:" 只想要慢慢靠近"},
{time:"03:39",value1:" 就这样遇见了你"},
{time:"03:44",value1:" 多么像一个奇迹"},
{time:"03:49",value1:" 你静静站在那里"},
{time:"03:53",value1:" 人群中如此美丽"},
{time:"03:58",value1:" 就这样遇见了你"},
{time:"04:02",value1:" 似曾相识的梦境"},
{time:"04:07",value1:" 不愿把彼此唤醒"},
{time:"04:11",value1:" 只想要慢慢靠近"},
{time:"04:16",value1:" 慢慢靠近"}]},
	{id:'$2',name:'十点半的地铁',who:'李健 ',src:'../music/李健 - 十点半的地铁(Live).mp3',zhuanji:'十点半的地铁',bigimg:'../img/big-2.jpg',img:'../img/thumb.jpg'},
	{id:'$3',name:'另一种伴侣',who:'牛奶咖啡',src:'../music/李佑晨 - 另一种伴侣.mp3',zhuanji:'另一种伴侣',bigimg:'../img/big-3.jpg',img:'../img/thumb.jpg'},
	{id:'$4',name:'幸福不是情歌',who:'刘若英',src:'../music/刘若英 - 幸福不是情歌.mp3',zhuanji:'幸福不是情歌',bigimg:'../img/big-4.jpg',img:'../img/thumb.jpg'},
	{id:'$5',name:'爱不爱我',who:'狮子合唱团',src:'../music/狮子合唱团 - 爱不爱我(Live).mp3',zhuanji:'爱不爱我',bigimg:'../img/big-5.jpg',img:'../img/thumb.jpg'},
	{id:'$6',name:'南风吹',who:'董贞 ',src:'../music/董贞 - 南风吹.mp3',zhuanji:'南风吹',bigimg:'../img/big-6.jpg',img:'../img/thumb.jpg'}
	]
    var audio= document.getElementById("audio");
    $(".audio").click(function(){
		if(audio.paused){
			audio.src=musics[select].src;  //select 的值对应数据库的歌地址赋给
<<<<<<< HEAD
			$(this).find("img").attr("src","../img/mx_play.png")
			audio.play();
		}else{
			$(this).find("img").attr("src","../img/mx_pased.png")
=======
			audio.play();
		}else{
>>>>>>> 930a5b055f2cb4450708313a961e9b8ceed90f70
			audio.pause();
		}
    })
    
    //初始化歌词
	
		musics[select].geci.forEach((value)=>{
			var li2=document.createElement('p');
			li2.innerHTML=`${value.value1}`;
			geci.appendChild(li2);
		});
    //获取时长
    audio.ontimeupdate=function(){
    	if(audio.paused){
			$(".img>.imgbox").removeClass("move");
		}else{
			$(".img>.imgbox").addClass("move");	
		}
    	//判断只在评论页显示
    	if($(".swiper-slide-active").index()==1){
			$(".pinglunliebiao").css("display","block");
		}else{
			$(".pinglunliebiao").css("display","none");
		}
		time=timecheage(audio.duration);//获取总时长
		$('.time>span:last-child').html(time);
		var intime=timecheage(audio.currentTime)//获取当前时长
		$('.time>span:first-child').html(intime);
		width=audio.currentTime/audio.duration*100+"%";
		$(".progress>.played").width(width);
		musics[select].geci.forEach((value,index)=>{
			var i;
			if(value.time==intime){
				i=index;
				geci.innerHTML='';
				if(index<=8){
					index=0;
				}else{
					index=index-8;
					i=i-index;
				}
				for(var j=index;j<musics[select].geci.length;j++){
					var li=document.createElement('p');
					li.innerHTML=musics[select].geci[j].value1;
					geci.appendChild(li)
				}
			    geci.children[i].classList.add('open');  
			} 
		})
	}
	//时间转换函数
	function timecheage(time){
		var t=Math.floor(time/60)>=10?Math.floor(time/60):'0'+Math.floor(time/60);
		var s=Math.floor(time)%60>=10?Math.floor(time)%60:'0'+Math.floor(time)%60;
		return t+':'+s;
	}
	function move(){
		$('.time>span').html("00:00");
		audio.src=musics[select].src;  //select 的值对应数据库的歌地址赋给
		img.css("background-image","url("+musics[select].img+")");
		$(".name").html(musics[select].name);
	}
	$(".play>.next").click(function (){
		if(fleg){
			select=Math.floor(Math.random()*musics.length);	
		}else{
			select++;
			if(select==musics.length){
				select=0;
			}
		}
		move();
		audio.play();
	})
	$(".play>.before").click(function (){
		if(fleg){
			select=Math.floor(Math.random()*musics.length);	
		}else{
			select--;
			if(select<0){
				select=musics.length-1;
			}
		}
		move();
		audio.play();
	})
	//结束后自动播放下一曲
	audio.onended=function (){
		$(".play>.next").click();
	};
	$(".play>.random").click(function(){
		if(fleg==false){
<<<<<<< HEAD
			$(this).find("img").attr("src","../img/mx_random.png")
			fleg=true;
		}else{
			fleg=false;	
			$(this).find("img").attr("src","../img/mx_suiji.png")
		}
	})
	
=======
			fleg=true;
		}else{
			fleg=false;	
		}
	})
	
	
>>>>>>> 930a5b055f2cb4450708313a961e9b8ceed90f70
	//分享的按钮点击
	$(".share").click(function(){
		$(".share_hidden").css("display","block");
		$(".bacha").click(function(){
		$(".share_hidden").css("display","none");
			
		})
	})
	//下载
	$(".download").click(function(){
		$(this).attr("href",audio.src);
		$(this).attr("download",audio.src);
	})
<<<<<<< HEAD
	//收藏按钮的点击
	$(".shoucang").click(function(){
			$(this).find("img").attr("src","../img/yishoucang.png")
			//发送aiax尽心数据库的更新
	})
	
=======
>>>>>>> 930a5b055f2cb4450708313a961e9b8ceed90f70
}
