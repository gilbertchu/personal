//Export code should follow the format below:
/*
var anchorStripe = false;
var anchorWidth = 728;
var anchorHeight = 90;
var anchorOrigin = "bottom"; //Left, right, top, bottom
var anchorAlign = "center"; //Horizontal align: Left, center, right
var pvertical = 50; //Vertical align: % from top
var anchorRefresh = 0; //Seconds to refresh; 0 to disable
var displayChance = 100; //% Display chance
var capping = 0; // 1 to enable cookie-based capping, 0 to disable capping
var impperses = 10; // Impressions per session cap
var seslen = 24; // Session length in hours (1-24)
var backgroundSource = "none"; //URL for custom background; "none" to disable
var anchorSrc = "./sample.jpg";
*/
//Requires jQuery
//You will want to minify this script before hosting!

if (typeof anchorSrc!='undefined'){
(function($,width,height,origin,align,pvertical,refresh,displayChance,src,bgsrc,cap,ips,slen,stripe,undefined){
//if (typeof stripe == "undefined") stripe=false;
if (displayChance<100&&displayChance>0&&(Math.random()*100)>displayChance) return;
if (cap==1&&ips>0){
	var cparts=document.cookie.split("anchorImps=");
	if (cparts.length==2){
		var simps=parseInt(cparts.pop().split(";").shift(),10);
		if (simps>=ips) return;
		cparts=document.cookie.split("anchorExp=");
		var sexp=new Date(parseInt(cparts.pop().split(";").shift()));
		document.cookie="anchorImps="+(simps+1)+";path=/;expires="+sexp;
	}else{
		var exp=new Date();
		exp.setTime(exp.getTime()+slen*3600000);
		document.cookie="anchorImps=1;path=/;expires="+exp;
		document.cookie="anchorExp="+exp.getTime()+";path=/;expires="+exp;
	}
}
bgsrc=(bgsrc=='none')?'black':'url('+bgsrc+')';
var to;
var f=document.createElement('iframe');
f.setAttribute('marginheight','0');
f.setAttribute('marginwidth','0');
f.setAttribute('scrolling','no');
f.setAttribute('frameborder','0');
f.setAttribute('width',width);
f.setAttribute('height',height);
f.setAttribute('src',src);
f.setAttribute('allowTransparency','true');
f.style.setProperty('width',width+'px','important');
f.style.setProperty('height',height+'px','important');
f.style.setProperty('display','inline-block','important');
f.style.setProperty('z-index','5291','important');
f.style.setProperty('margin','0','important');
f.style.setProperty('padding','0','important');
f.style.setProperty('background',bgsrc,'important');
f.style.setProperty('background-repeat','repeat','important');
var i=document.createElement('div');
var x=document.createElement('img');
var xa=document.createElement('a');
i.style.setProperty('width',width+'px','important');
i.style.setProperty('height',height+'px','important');
i.style.setProperty('display','inline-block','important');
i.style.setProperty('z-index','5291','important');
i.style.setProperty('position','relative','important');
i.style.setProperty('padding','0','important');
var valign,halign,dwidth,dheight,xprop,wfix;
if (origin=='left'||origin=='right'){
	if (isNaN(pvertical)||pvertical>100||pvertical<0) pvertical=50;
	i.style.setProperty('top',pvertical+'%','important');
	var vmarg=height*pvertical/100;
	i.style.setProperty('margin','-'+vmarg+'px 0px 0px 0px','important');
	halign=origin;
	dwidth=width+'px';
	dheight='100%';
	xprop=(pvertical<=50)?'bottom':'top';
	wfix='top';
}else{
	halign=align;
	dwidth='100%';
	dheight=height+'px';
	i.style.setProperty('margin','0','important');
	xprop=(align=='right')?'left':'right';
	wfix='left';
}
i.appendChild(f);
x.setAttribute('src','./x.png');
x.style.setProperty('width','21px','important');
x.style.setProperty('height','21px','important');
x.style.setProperty('display','inline-block','important');
x.style.setProperty('z-index','9001','important');
x.style.setProperty('margin','0','important');
x.style.setProperty('padding','0','important');
xa.setAttribute('href','#');
xa.setAttribute('title','Close this ad');
xa.style.setProperty('width','21px','important');
xa.style.setProperty('height','21px','important');
xa.style.setProperty('display','inline-block','important');
xa.style.setProperty('margin','0','important');
xa.style.setProperty('padding','0','important');
xa.style.setProperty('position','absolute','important');
xa.style.setProperty('z-index','80085','important');
xa.appendChild(x);
var d=document.createElement('div');
d.style.setProperty('display','block','important');
d.style.setProperty('z-index','1337','important');
d.style.setProperty('clear','both','important');
d.style.setProperty('float','none','important');
d.style.setProperty('position','fixed','important');
d.style.setProperty('text-align',halign,'important');
d.style.setProperty('width',dwidth,'important');
d.style.setProperty('height',dheight,'important');
d.style.setProperty('min-width','21px','important');
d.style.setProperty('min-height','21px','important');
d.style.setProperty('margin','0','important');
d.style.setProperty('padding','0','important');
d.style.setProperty(wfix,'0','important');
if (stripe===true&&origin=='bottom'&&align=='center') {
	var s=document.createElement('div');
	s.style.setProperty('display','block','important');
	s.style.setProperty('z-index','1337','important');
	s.style.setProperty('clear','both','important');
	s.style.setProperty('float','none','important');
	s.style.setProperty('position','absolute','important');
	s.style.setProperty('width','100%','important');
	s.style.setProperty('height','60px','important');
	s.style.setProperty('margin','0','important');
	s.style.setProperty('padding','0','important');
	s.style.setProperty('bottom','0','important');
	s.style.setProperty('background','#000','important');
	//var soff=$('body').css('margin-left');
	//s.style.setProperty('left','-'+soff,'important');
	//s.style.setProperty('text-align','right','important');
	xa.style.setProperty('right','0px','important');
	xa.style.setProperty('top','0px','important');
	var re=document.createElement('a');
	re.style.setProperty('display','inline-block','important');
	re.setAttribute('href','http://www.gilbertchu.com/');
	re.setAttribute('title','Gilbert Chu');
	//re.style.setProperty('width','21px','important');
	//re.style.setProperty('height','21px','important');
	re.style.setProperty('display','inline-block','important');
	re.style.setProperty('width','110px','important');
	re.style.setProperty('height','16px','important');
	re.style.setProperty('background','url(./ref.png)','important');
	re.style.setProperty('margin','0','important');
	re.style.setProperty('padding','0','important');
	re.style.setProperty('position','absolute','important');
	re.style.setProperty('z-index','80085','important');
	re.style.setProperty('right','0px','important');
	re.style.setProperty('bottom','0px','important');
	s.appendChild(xa);
	s.appendChild(re);
	d.appendChild(s);
} else {
	xa.style.setProperty(xprop,'-21px','important');
	i.appendChild(xa);
}
$(xa).addClass('toHide');
var dist=height,aHide=[],aShow=[],rm=parseInt(refresh*1000,10);
$(document).ready(doc_ready);
function doc_ready(){
	switch(origin){
		case 'top':
			xa.style.setProperty('bottom','0px','important');
			d.style.top='-'+height+'px';
			break;
		case 'left':
			xa.style.setProperty('right','0px','important');
			d.style.left='-'+width+'px';
			dist=width;
			d.style.setProperty('top','0','important');
			break;
		case 'right':
			xa.style.setProperty('left','0px','important');
			d.style.right='-'+width+'px';
			dist=width;
			d.style.setProperty('top','0','important');
			break;
		default:
			xa.style.setProperty('top','0px','important');
			d.style.bottom='-'+height+'px';
			break;
	}
	aHide[origin]='-='+dist+'px';
	aShow[origin]='+='+dist+'px';
	$(xa).click(f_click);
	d.appendChild(i);
	document.body.appendChild(d);
	$(f).load(f_load);
}
function checkScroll() {
	if ($(xa).hasClass('sliding')===false) {
		var wheight=window.innerHeight;
		var dheight=$(document).height();
		var sheight=$(window).scrollTop();
		if ((sheight+wheight<=dheight-height||(wheight+height)>=dheight) && $(xa).hasClass('toHide')===true) {
			$(xa).addClass('sliding');
			$(xa).removeClass('toHide');
			$(d).animate(aShow,500,'swing',f_check);
		} else if ((wheight+height)<dheight&&sheight+wheight>dheight-height&&$(xa).hasClass('toHide')===false) {
			$(xa).addClass('sliding');
			$(xa).addClass('toHide');
			$(d).animate(aHide,500,'swing',f_check);
		}
	}
}
function f_check(){
	$(xa).removeClass('sliding');
	checkScroll();
}
function f_animateInner(){
	$(xa).removeClass('toHide');
	$(xa).removeClass('sliding');
}
function f_ready(){
	$(d).show();
	$(xa).addClass('sliding');
	$(d).animate(aShow,500,'swing',f_animateInner);
}
function f_timeout(){
	$(f).ready(f_ready);
}
function f_animateOuter(){
	$(d).hide();
	if (rm>0){
		if (cap==1&&ips>0){
			var cparts=document.cookie.split("anchorImps=");
			var simps=parseInt(cparts.pop().split(";").shift(),10);
			if (simps>=ips) return;
			cparts=document.cookie.split("anchorExp=");
			var sexp=new Date(parseInt(cparts.pop().split(";").shift()));
			document.cookie="anchorImps="+(simps+1)+";path=/;expires="+sexp;
		}
		window.clearTimeout(to);
		f.setAttribute('src',src);
		to=window.setTimeout(f_timeout,rm);
	}
}
function f_click(){
	if ($(xa).hasClass('toHide')===false){
		$(xa).addClass('toHide');
		$(xa).addClass('sliding');
		$(d).animate(aHide,500,'swing',f_animateOuter);
	}
	return false;
}
function f_animateLoad(){
	$(xa).removeClass('toHide');
	if (origin=='bottom') {
		checkScroll();
		$(window).scroll(checkScroll);
		$(window).resize(checkScroll);
	}
}
function f_load(){
	$(f).unbind();
	$(d).animate(aShow,500,'swing',f_animateLoad);
}
}(jQuery,anchorWidth,anchorHeight,anchorOrigin,anchorAlign,pvertical,anchorRefresh,displayChance,anchorSrc,backgroundSource,capping,impperses,seslen,window.anchorStripe=window.anchorStripe||{}));}
