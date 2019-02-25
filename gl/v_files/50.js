//本客服系统JS，由张家界鼎尖网络科技有限公司开发，复制请保留版权。
//已经申请计算机著作权，我们有依法追究相关侵权的权利。
//合作电话：0744-8383800 网址：www.itzjj.com  法律顾问：代可律师

var kefu = [
{id:"xiaochu",name:"小楚",QQ:"",weixin:"19142922044",tel:"19142922044",wximg:"v_files/xiaochu.jpg",nicheng:"美女",sex:"她"},
{id:"xiaozhong",name:"小钟",QQ:"",weixin:"15607731867",tel:"15607731867",wximg:"v_files/xiaozhong.jpg",nicheng:"美女",sex:"她"}
];

var kefuIndex;
var urlArr = window.location.href.toLowerCase().split('#');
var kefuInfo = $.cookie("kefusys101_50");
if(!kefuInfo){
	if(urlArr.length > 1){
		for(var i=0;i<kefu.length;i++){
			if(kefu[i].id == urlArr[urlArr.length-1]){
				kefuIndex = i;
				break;
			}
		}
		if(!kefuIndex){
			kefuIndex = Math.floor(Math.random()*kefu.length);
		}
	}else{
		kefuIndex = Math.floor(Math.random()*kefu.length);
	}
	kefuInfo = kefu[kefuIndex];
	$.cookie('kefusys101_50',JSON.stringify(kefuInfo),{expires: 360,path:'/'});
}else{
	kefuInfo = JSON.parse(kefuInfo);
}
history.replaceState({id:kefuInfo.id},document.title,"#"+kefuInfo.id);

$(function(){
	$(".kefuName").text(kefuInfo.name);
	$(".kefuTel").text(kefuInfo.tel);
	$(".kefuSex").text(kefuInfo.sex);
	$(".kefuQQ").text(kefuInfo.QQ);
	$(".kefuWx").text(kefuInfo.weixin);
	$(".kefuniCheng").text(kefuInfo.nicheng);
	$(".kefuImg").attr('src',kefuInfo.wximg);
	$(".kefuBoda").attr('href',"tel:"+kefuInfo.tel);
	$(".kefuBoda").text(kefuInfo.tel);
});