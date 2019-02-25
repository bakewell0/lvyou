// JavaScript Document

function setCookie(name,value){
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}

var lxinfo=[{nn:"童童",tt:"<a href='tel:13026939725'>13026939725</a>",mm:"<img  src='v_files/ewm.jpg'/*tpa=http://www.zjjxygsj.com/gl/v_files/v_files/ewm.jpg*/ style=' width:300px; height:auto;'/>"},
			{nn:"小鹿",tt:"<a href='tel:17774701735'>17774701735</a>",mm:"<img  src='v_files/ewm1.jpg'/*tpa=http://www.zjjxygsj.com/gl/v_files/v_files/ewm1.jpg*/ style=' width:300px; height:auto;'/>"}];		
			
/*var lxinfo=[{nn:"甜甜",tt:"<a href='tel:13132972292'>13132972292</a>",mm:"<img  src='v_files/ttewm.jpg'/*tpa=http://www.zjjxygsj.com/gl/v_files/v_files/ttewm.jpg*/ style=' width:300px; height:auto;'/>"},
			{nn:"甜甜",tt:"<a href='tel:13132972292'>13132972292</a>",mm:"<img  src='v_files/ttewm.jpg'/*tpa=http://www.zjjxygsj.com/gl/v_files/v_files/ttewm.jpg*/ style=' width:300px; height:auto;'/>"}];	*/		
		
(function(){
	if(getCookie("ljj")==null){
        setCookie("ljj",Math.round(Math.random() *(lxinfo.length-1)));
    }
    var rnd=getCookie("ljj");
	var nm = document.getElementsByClassName("rname");
	var tel = document.getElementsByClassName("wxhao");
	var ewm = document.getElementsByClassName("weixin");
	
    for (var ii = 0; ii < nm.length; ii++) {
        nm[ii].innerHTML=lxinfo[rnd].nn;
    }
    for (var ii = 0; ii < tel.length; ii++) {
        tel[ii].innerHTML=lxinfo[rnd].tt;
    }
    for (var ii = 0; ii < ewm.length; ii++) {
        ewm[ii].innerHTML=lxinfo[rnd].mm;
    }
	
	

})();
