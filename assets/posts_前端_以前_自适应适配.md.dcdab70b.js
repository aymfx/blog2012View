import{_ as e,c as n,o as i,x as t}from"./chunks/framework.1f285265.js";const u=JSON.parse('{"title":"自适应适配","description":"","frontmatter":{"title":"自适应适配","date":"2017-07-21T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/前端/以前/自适应适配.md"}'),r={name:"posts/前端/以前/自适应适配.md"},d=t("p",null,"//自适应方案",-1),o=t("pre",null,[t("code",null,`;(function(win) {
	var doc = win.document;
	var docEl = doc.documentElement;
	var dpr = 0;
	var tid = 0;
	var isAndroid = win.navigator.appVersion.match(/android/gi);
	var isIPhone = win.navigator.appVersion.match(/iphone/gi);
	var devicePixelRatio = win.devicePixelRatio;
	if(isIPhone) {
		// iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
		if(devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
			dpr = 2;
		} else if(devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
			dpr = 2;
		} else {
			dpr = 1;
		}
	} else {
		// 其他设备下，仍旧使用1倍的方案
		dpr = 1;
	}

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		if(width > 750) {
			width = 750;
		}
		var rem = width / 7.5;
		docEl.style.fontSize = rem + 'px';
	}

	win.addEventListener('resize', function() {
		clearTimeout(tid);
		tid = setTimeout(refreshRem, 300);
	}, false);
	win.addEventListener('pageshow', function(e) {
		if(e.persisted) {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	refreshRem();

	docEl.setAttribute('data-dpr', dpr);
})(window);
`)],-1),a=[d,o];function s(c,p,l,f,m,_){return i(),n("div",null,a)}const v=e(r,[["render",s]]);export{u as __pageData,v as default};
