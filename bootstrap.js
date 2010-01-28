(function() {
	var base = 'http://localhost:4321/';
	function find(url) {
		var ss = document.getElementsByTagName('script');
		for (var i=0; i<ss.length; i++) {			
			if (ss[i].src == url) {
				return true;
			}
		}
		return false;
	}
	function js(url, fn) {
		if (!find(url)) {
			var s=document.createElement('script');
			document.getElementsByTagName('head')[0].appendChild(s);
			if (fn) s.onload=fn;
			s.src=url;
		}
		else if(fn) {
			fn();
		}
	}
	function css(url) {
		var l=document.createElement('link');
		l.rel='stylesheet';
		l.type='text/css';
		l.href=url;
		document.getElementsByTagName('head')[0].appendChild(l);
	}
	js('http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js');
	js('http://documentcloud.github.com/underscore/underscore-min.js');
	js(base + 'lib/json2.js');
	js(base + 'lib/jquery.couch.js');
	js(base + 'lib/jquery.wnt.js');
	js(base + 'lib/couch.js');
	css(base + 'oyster.css');
	js(base + 'lib/termlib.js', function() {	
		js(base + 'oyster.js', function() { oyster(); });
	});
})();