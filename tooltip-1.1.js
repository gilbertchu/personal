/*	
 *	Tooltip
 *	Version 1.1
 *	Namespace: tt
 *	Display tooltips on hover.
 *	You will need to set attributes: onmouseover=tt.toolTip and onmouseout=tt.hide
 *
 *	Gilbert Chu
 */
 
(function(tt,undefined) {
	var ttd = document.createElement('div');
	document.body.appendChild(ttd);
	ttd.setAttribute('id','tooltip'); //Use this id for CSS, etc.
	ttd.style.opacity = 0;
	ttd.style.filter = 'alpha(opacity=0)';
	document.onmousemove = pos;
	var h, alpha = 0, endalpha = 95, id = 'tooltip';
	//Detect for ie. Set value of ie manually of errors occur.
	var ie = document.all ? true : false;
    if (typeof jQuery!=='undefined' && $('html').is('.ie6, .ie7, .ie8')) {
        ie = true;
    }
	function pos(e) {
		var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
		var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
		ttd.style.top = (u - h) + 'px';
		ttd.style.left = (l + 3) + 'px';
	}
	function fade(d) {
		var a = alpha;
		if ((a != endalpha && d == 1) || (a != 0 && d == -1)) {
			var i = 10;
			if (endalpha - a < 10 && d == 1) {
				i = endalpha - a;
			} else if(alpha < 10 && d == -1) {
				i = a;
			}
			alpha = a + (i * d);
			ttd.style.opacity = alpha * .01;
			ttd.style.filter = 'alpha(opacity=' + alpha + ')';
		} else {
			clearInterval(ttd.timer);
			if(d == -1){ttd.style.display = 'none'}
		}
	}
	tt.toolTip = function(desc, opt, w) {
		ttd.style.display = 'block'
		if (opt===undefined) ttd.innerHTML = "<span id='ttDesc'>" + desc + "</span>";
		else ttd.innerHTML = "<span id='ttTitle'>" + desc + "</span><br><span id='ttDesc'>" + opt + "</span>";
		ttd.style.width = w ? w + 'px' : 'auto';
		if (!w && ie) {
			ttd.style.width = ttd.offsetWidth;
		}
		if (ttd.offsetWidth > 300) ttd.style.width = 300 + 'px'
		h = parseInt(ttd.offsetHeight) + 3;
		clearInterval(ttd.timer);
		ttd.timer = setInterval(function(){fade(1)},20);
	}
	tt.hide = function() {
		clearInterval(ttd.timer);
		ttd.timer = setInterval(function(){fade(-1)},20);
	}
})(window.tt=window.tt||{});
