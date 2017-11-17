(function(){ko.bindingHandlers.pickatime={init:function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;n=b(),i={clear:"Clear",format:"hh:i A",formatLabel:void 0,formatSubmit:void 0,hiddenPrefix:void 0,hiddenSuffix:"_submit",editable:void 0,interval:30,min:void 0,max:void 0,disable:void 0,container:void 0,onStart:void 0,onRender:void 0,onOpen:void 0,onClose:void 0,onSet:void 0,onStop:void 0,klass:{input:"picker__input",active:"picker__input--active",picker:"picker picker--time",opened:"picker--opened",focused:"picker--focused",holder:"picker__holder",frame:"picker__frame",wrap:"picker__wrap",box:"picker__box",list:"picker__list",listItem:"picker__list-item",disabled:"picker__list-item--disabled",selected:"picker__list-item--selected",highlighted:"picker__list-item--highlighted",viewset:"picker__list-item--viewset",now:"picker__list-item--now",buttonClear:"picker__button--clear"}},k=c.get("pickatime_options"),j="function"==typeof k?k():k||{};for(h in j)m=j[h],i[h]=m;p=function(a){return a.attr("autocomplete","off").pickatime(i).pickatime("picker")},i.clear_button_addon||i.clock_addon?(o=(new Date).getTime(),i.container="#"+o,g="before"===i.clock_addon?"before":"after",f="before"===i.clear_button_addon?"before":"after",e=i.clock_addon?$("<span class='input-group-addon'><i style='color: navy; cursor: pointer'title='A time picker appears when interacting with this field'class='fa fa-clock-o'></i></span>"):void 0,d=i.clear_button_addon?$("<span class='input-group-addon'><i style='color: navy; cursor: pointer'title='Click to clear time'class='fa fa-times'></i></span>"):void 0,l=p($(a).wrap($("<div id="+o+"></div>")).wrap($("<div class='input-group'></div>"))),$(a)[f](d),$(a)[g](e),i.clock_addon&&e.on("click",function(a){return l.open(),a.stopPropagation(),a.preventDefault()}),i.clear_button_addon&&d.on("click",function(a){return l.set("clear"),a.stopPropagation(),a.preventDefault()})):l=p($(a)),l.on("set",function(){var a;return a=l.get("select"),a?a!==n()?n(l.get()):void 0:n(a)}),ko.utils.domNodeDisposal.addDisposeCallback(a,function(){return i.clock_addon&&e.off("click"),i.clear_button_addon&&d.off("click"),l.get("start")?l.stop():void 0})},update:function(a,b){var c,d,e;return e=b(),c=ko.unwrap(e),d=$(a).pickatime("picker"),null==c||""===c?void d.set("clear"):void d.set("select",c)}}}).call(this);
/*!
* pickadate.js v3.5.4, 2014/09/11
* By Amsul, http://amsul.ca
* Hosted on http://amsul.github.io/pickadate.js
* Licensed under MIT
*/
!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,h,k){function l(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",x.component.nodes(s.open),u.box),u.wrap),u.frame),u.holder)}function m(){v.data(g,x).addClass(u.input).attr("tabindex",-1).val(v.data("value")?x.get("select",t.format):f.value),t.editable||v.on("focus."+s.id+" click."+s.id,function(a){a.preventDefault(),x.$root[0].focus()}).on("keydown."+s.id,p),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"+(x._hidden?" "+x._hidden.id:"")})}function n(){x.$root.on({keydown:p,focusin:function(a){x.$root.removeClass(u.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=x.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is(":input")||"OPTION"==c.nodeName||(b.preventDefault(),x.$root[0].focus()))}}).on({focus:function(){v.addClass(u.target)},blur:function(){v.removeClass(u.target)}}).on("focus.toOpen",q).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(u.navDisabled)||b.hasClass(u.disabled),e=document.activeElement;e=e&&(e.type||e.href)&&e,(d||e&&!a.contains(x.$root[0],e))&&x.$root[0].focus(),!d&&c.nav?x.set("highlight",x.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?x.set("select",c.pick).close(!0):c.clear?x.clear().close(!0):c.close&&x.close(!0)}),e(x.$root[0],"hidden",!0)}function o(){var b;t.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof t.hiddenPrefix?t.hiddenPrefix:"","string"==typeof t.hiddenSuffix?t.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),x._hidden=a('<input type=hidden name="'+b+'"'+(v.data("value")||f.value?' value="'+x.get("select",t.formatSubmit)+'"':"")+">")[0],v.on("change."+s.id,function(){x._hidden.value=f.value?x.get("select",t.formatSubmit):""}).after(x._hidden)}function p(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(x.close(),!1):void((32==b||c||!s.open&&x.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?x.clear().close():x.open()))}function q(a){a.stopPropagation(),"focus"==a.type&&x.$root.addClass(u.focused),x.open()}if(!f)return b;var r=!1,s={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},t=h?a.extend(!0,{},h.defaults,k):k||{},u=a.extend({},b.klasses(),t.klass),v=a(f),w=function(){return this.start()},x=w.prototype={constructor:w,$node:v,start:function(){return s&&s.start?x:(s.methods={},s.start=!0,s.open=!1,s.type=f.type,f.autofocus=f==document.activeElement,f.readOnly=!t.editable,f.id=f.id||s.id,"text"!=f.type&&(f.type="text"),x.component=new h(x,t),x.$root=a(b._.node("div",l(),u.picker,'id="'+f.id+'_root" tabindex="0"')),n(),t.formatSubmit&&o(),m(),t.container?a(t.container).append(x.$root):v.after(x.$root),x.on({start:x.component.onStart,render:x.component.onRender,stop:x.component.onStop,open:x.component.onOpen,close:x.component.onClose,set:x.component.onSet}).on({start:t.onStart,render:t.onRender,stop:t.onStop,open:t.onOpen,close:t.onClose,set:t.onSet}),r=c(x.$root.children()[0]),f.autofocus&&x.open(),x.trigger("start").trigger("render"))},render:function(a){return a?x.$root.html(l()):x.$root.find("."+u.box).html(x.component.nodes(s.open)),x.trigger("render")},stop:function(){return s.start?(x.close(),x._hidden&&x._hidden.parentNode.removeChild(x._hidden),x.$root.remove(),v.removeClass(u.input).removeData(g),setTimeout(function(){v.off("."+s.id)},0),f.type=s.type,f.readOnly=!1,x.trigger("stop"),s.methods={},s.start=!1,x):x},open:function(c){return s.open?x:(v.addClass(u.active),e(f,"expanded",!0),setTimeout(function(){x.$root.addClass(u.opened),e(x.$root[0],"hidden",!1)},0),c!==!1&&(s.open=!0,r&&j.css("overflow","hidden").css("padding-right","+="+d()),x.$root[0].focus(),i.on("click."+s.id+" focusin."+s.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&x.close(b===x.$root.children()[0])}).on("keydown."+s.id,function(c){var d=c.keyCode,e=x.component.key[d],f=c.target;27==d?x.close(!0):f!=x.$root[0]||!e&&13!=d?a.contains(x.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(x.component.key.go,x,[b._.trigger(e)]):x.$root.find("."+u.highlighted).hasClass(u.disabled)||x.set("select",x.component.item.highlight).close())})),x.trigger("open"))},close:function(a){return a&&(x.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){x.$root.on("focus.toOpen",q)},0)),v.removeClass(u.active),e(f,"expanded",!1),setTimeout(function(){x.$root.removeClass(u.opened+" "+u.focused),e(x.$root[0],"hidden",!0)},0),s.open?(s.open=!1,r&&j.css("overflow","").css("padding-right","-="+d()),i.off("."+s.id),x.trigger("close")):x},clear:function(a){return x.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in x.component.item&&(void 0===f&&(f=null),x.component.set(e,f,d)),("select"==e||"clear"==e)&&v.val("clear"==e?"":x.get(e,t.format)).trigger("change");x.render()}return d.muted?x:x.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=s[a])return s[a];if("value"==a)return f.value;if(a in x.component.item){if("string"==typeof c){var d=x.component.get(a);return d?b._.trigger(x.component.formats.toString,x.component,[c,d]):""}return x.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),s.methods[e]=s.methods[e]||[],s.methods[e].push(f)}return x},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;namesCount>a;a+=1)b=c[a],b in s.methods&&delete s.methods[b];return x},trigger:function(a,c){var d=function(a){var d=s.methods[a];d&&d.map(function(a){b._.trigger(a,x,[c])})};return d("_"+a),d(a),x}};return new w}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(j.height()<=h.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}var h=a(window),i=a(document),j=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getUTCDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b});

/*!
* Time picker for pickadate.js v3.5.4
* http://amsul.github.io/pickadate.js/time.htm
*/
!function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0].value,e=a.$node.data("value"),f=e||d,g=e?b.formatSubmit:b.format;c.settings=b,c.$node=a.$node,c.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse create validate",view:"parse create validate",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.interval=b.interval||30,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),f?c.set("select",f,{format:g,fromValue:!!d}):c.set("select",null).set("highlight",c.item.now),c.key={40:1,38:-1,39:1,37:-1,go:function(a){c.set("highlight",c.item.highlight.pick+a*c.item.interval,{interval:a*c.item.interval}),this.render()}},a.on("render",function(){var c=a.$root.children(),d=c.find("."+b.klass.viewset),e=function(a){return["webkit","moz","ms","o",""].map(function(b){return(b?"-"+b+"-":"")+a})},f=function(a,b){e("transform").map(function(c){a.css(c,b)}),e("transition").map(function(c){a.css(c,b)})};d.length&&(f(c,"none"),c[0].scrollTop=~~d.position().top-2*d[0].clientHeight,f(c,""))},1).on("open",function(){a.$root.find("button").attr("disabled",!1)},1).on("close",function(){a.$root.find("button").attr("disabled",!0)},1)}var d=24,e=60,f=12,g=d*e,h=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):"interval"==a?d.set("min",e.min,c).set("max",e.max,c):a.match(/^(flip|min|max|disable|enable)$/)&&("min"==a&&d.set("max",e.max,c),e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,f){var i=this;return c=void 0===c?a:c,h.isDate(c)&&(c=[c.getHours(),c.getMinutes()]),b.isPlainObject(c)&&h.isInteger(c.pick)?c=c.pick:b.isArray(c)?c=+c[0]*e+ +c[1]:h.isInteger(c)||(c=i.now(a,c,f)),"max"==a&&c<i.item.min.pick&&(c+=g),"min"!=a&&"max"!=a&&(c-i.item.min.pick)%i.item.interval!==0&&(c+=i.item.interval),c=i.normalize(a,c,f),{hour:~~(d+c/e)%d,mins:(e+c%e)%e,time:(g+c)%g,pick:c}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||h.isDate(a)?d.create(a):a};return h.isInteger(a)||(a=e(a)),h.isInteger(c)||(c=e(c)),h.isInteger(a)&&b.isPlainObject(c)?a=[c.hour,c.mins+a*d.settings.interval]:h.isInteger(c)&&b.isPlainObject(a)&&(c=[a.hour,a.mins+c*d.settings.interval]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b){var c,d=this.item.interval,f=new Date,g=f.getHours()*e+f.getMinutes(),i=h.isInteger(b);return g-=g%d,c=0>b&&-d>=d*b+g,g+="min"==a&&c?0:d,i&&(g+=d*(c&&"max"!=a?b+1:b)),g},c.prototype.normalize=function(a,b){var c=this.item.interval,d=this.item.min&&this.item.min.pick||0;return b-="min"==a?0:(b-d)%c},c.prototype.measure=function(a,c,f){var g=this;return c||(c="min"==a?[0,0]:[d-1,e-1]),"string"==typeof c?c=g.parse(a,c):c===!0||h.isInteger(c)?c=g.now(a,c,f):b.isPlainObject(c)&&h.isInteger(c.pick)&&(c=g.normalize(a,c.pick,f)),c},c.prototype.validate=function(a,b,c){var d=this,e=c&&c.interval?c.interval:d.item.interval;return d.disabled(b)&&(b=d.shift(b,e)),b=d.scope(b),d.disabled(b)&&(b=d.shift(b,-1*e)),b},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return h.isInteger(d)?a.hour==d:b.isArray(d)||h.isDate(d)?a.pick==c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[2]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.shift=function(a,b){var c=this,d=c.item.min.pick,e=c.item.max.pick;for(b=b||c.item.interval;c.disabled(a)&&(a=c.create(a.pick+=b),!(a.pick<=d||a.pick>=e)););return a},c.prototype.scope=function(a){var b=this.item.min.pick,c=this.item.max.pick;return this.create(a.pick>c?c:a.pick<b?b:a)},c.prototype.parse=function(a,b,c){var d,f,g,i,j,k=this,l={};if(!b||"string"!=typeof b)return b;c&&c.format||(c=c||{},c.format=k.settings.format),k.formats.toArray(c.format).map(function(a){var c,d=k.formats[a],e=d?h.trigger(d,k,[b,l]):a.replace(/^!/,"").length;d&&(c=b.substr(0,e),l[a]=c.match(/^\d+$/)?+c:c),b=b.substr(e)});for(i in l)j=l[i],h.isInteger(j)?i.match(/^(h|hh)$/i)?(d=j,("h"==i||"hh"==i)&&(d%=12)):"i"==i&&(f=j):i.match(/^a$/i)&&j.match(/^p/i)&&("h"in l||"hh"in l)&&(g=!0);return(g?d+12:d)*e+f},c.prototype.formats={h:function(a,b){return a?h.digits(a):b.hour%f||f},hh:function(a,b){return a?2:h.lead(b.hour%f||f)},H:function(a,b){return a?h.digits(a):""+b.hour%24},HH:function(a,b){return a?h.digits(a):h.lead(b.hour%24)},i:function(a,b){return a?2:h.lead(b.mins)},a:function(a,b){return a?4:g/2>b.time%g?"a.m.":"p.m."},A:function(a,b){return a?2:g/2>b.time%g?"AM":"PM"},toArray:function(a){return a.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return h.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}},c.prototype.isTimeExact=function(a,c){var d=this;return h.isInteger(a)&&h.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(h.isDate(a)||b.isArray(a))&&(h.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isTimeExact(a.from,c.from)&&d.isTimeExact(a.to,c.to):!1},c.prototype.isTimeOverlap=function(a,c){var d=this;return h.isInteger(a)&&(h.isDate(c)||b.isArray(c))?a===d.create(c).hour:h.isInteger(c)&&(h.isDate(a)||b.isArray(a))?c===d.create(a).hour:b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,f=0;f<e.length;f+=1)if(d.isTimeExact(a,e[f])){c=!0;break}c||(h.isInteger(a)||h.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,f=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,g,i,j;for(i=0;f>i;i+=1){if(g=e[i],d.isTimeExact(g,a)){c=e[i]=null,j=!0;break}if(d.isTimeOverlap(g,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[2]||c.push("inverted")):h.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;f>i;i+=1)if(d.isTimeExact(e[i],a)){e[i]=null;break}if(j)for(i=0;f>i;i+=1)if(d.isTimeOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.i=function(a,b){return h.isInteger(b)&&b>0?b:this.item.interval},c.prototype.nodes=function(a){var b=this,c=b.settings,d=b.item.select,e=b.item.highlight,f=b.item.view,g=b.item.disable;return h.node("ul",h.group({min:b.item.min.pick,max:b.item.max.pick,i:b.item.interval,node:"li",item:function(a){a=b.create(a);var i=a.pick,j=d&&d.pick==i,k=e&&e.pick==i,l=g&&b.disabled(a);return[h.trigger(b.formats.toString,b,[h.trigger(c.formatLabel,b,[a])||c.format,a]),function(a){return j&&a.push(c.klass.selected),k&&a.push(c.klass.highlighted),f&&f.pick==i&&a.push(c.klass.viewset),l&&a.push(c.klass.disabled),a.join(" ")}([c.klass.listItem]),"data-pick="+a.pick+" "+h.ariaAttr({role:"option",selected:j&&b.$node.val()===h.trigger(b.formats.toString,b,[c.format,a])?!0:null,activedescendant:k?!0:null,disabled:l?!0:null})]}})+h.node("li",h.node("button",c.clear,c.klass.buttonClear,"type=button data-clear=1"+(a?"":" disabled")+" "+h.ariaAttr({controls:b.$node[0].id})),"",h.ariaAttr({role:"presentation"})),c.klass.list,h.ariaAttr({role:"listbox",controls:b.$node[0].id}))},c.defaults=function(a){return{clear:"Clear",format:"h:i A",interval:30,klass:{picker:a+" "+a+"--time",holder:a+"__holder",list:a+"__list",listItem:a+"__list-item",disabled:a+"__list-item--disabled",selected:a+"__list-item--selected",highlighted:a+"__list-item--highlighted",viewset:a+"__list-item--viewset",now:a+"__list-item--now",buttonClear:a+"__button--clear"}}}(a.klasses().picker),a.extend("pickatime",c)});

// 'backend' Module
//
// Depends on: utils.js

backend = {};

(function () {

    backend.CheckConnection = function (models, callback) {
        var databaseId = utils.GetHiddenValByName('DatabaseConnectionID');
        $.getJSON("/api/connection/?databaseId=" + databaseId, function (data) {
            callback(data);
        });
    };

    backend.LoadTables = function (callback) {
        var databaseId = utils.GetHiddenValByName('DatabaseConnectionID');
        $.getJSON("/api/tables/?databaseId=" + databaseId, function (data) {
            callback(data);
        })
        .fail(function () {
            callback([]);
        });
    };

    backend.GetJoins = function (tableName, callback) {
        var databaseId = utils.GetHiddenValByName('DatabaseConnectionID');
        $.getJSON("/api/joins/?databaseId=" + databaseId + "&tableName=" + tableName, function (data) {
            callback(data);
        })
        .fail(function () {
            callback([]);
        });
    };

    var lock = false,
        callbacks = [],
        latestNodes = null;

    backend.saveQuery = function (serverQueryKey, nodes, callback) {
        if (callback) {
            callbacks.push(callback);
        }

        if (lock) {
            latestNodes = nodes;
        } else {
            lock = true;
            latestNodes = null;
            $.ajax({
                "url": '/api/Nodes',
                "type": 'POST',
                "data": {
                    id: serverQueryKey(),
                    databaseId: utils.GetHiddenValByName('DatabaseConnectionID'),
                    nodes: JSON.stringify(nodes)
                },
                "dataType": "json"
            }).done(function (data) {
                serverQueryKey(data.id);
                lock = false;

                // if we have callbacks then obviously something changed while we were getting results, add this callback to queue and resave to get latest data
                if (latestNodes) {
                    var tmp = latestNodes;
                    latestNodes = null;
                    backend.saveQuery(serverQueryKey, tmp);
                } else {
                    while (callbacks.length > 0) {
                        callbacks.shift()();
                    }
                }
            }).fail(function () {
                lock = false;
                latestNodes = null;
                callbacks.length = 0;
            });
        }
    }

    backend.LoadData = function (serverQueryKey, nodes, nodeId, startRow, rowCount, format, output, callback) {
        if (!serverQueryKey()) {
            backend.saveQuery(serverQueryKey, nodes, function () {
                backend.LoadData(serverQueryKey, nodes, nodeId, startRow, rowCount, format, output, callback);
            });
        } else {
            $.getJSON("/api/data/?id=" + serverQueryKey() + "&nodeId=" + nodeId + "&startRow=" + startRow + "&rowCount=" + rowCount, function (data) {
                if (data.query) {
                    console.log(data.query);
                }
                callback(data);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == "404") {
                    serverQueryKey(null);
                    backend.LoadData(serverQueryKey, nodes, nodeId, startRow, rowCount, format, output, callback);
                } else {
                    callback({ status: "error" })
                }
            });
        }
    };

    backend.SaveSchedule = function (schedule, callback) {
        $.ajax({
            "url": '/api/schedule',
            "type": 'POST',
            "contentType": "application/json",
            "data": JSON.stringify(schedule),
            "dataType": "json"
        }).done(function (data) {
            callback(data);
        }).fail(function (data) {
            callback(data);
        });
    }

    backend.GetSchedule = function (queryId) {
        return $.ajax({
            "url": '/api/schedule?id=' + queryId,
            "type": 'GET',
            "contentType": "application/json",
            "dataType": "json"
        });
    }

    backend.LoadQueryColumnsName = function (queryId) {
        return $.ajax({
            "url": "/api/QueryColumnsName?queryId=" + queryId,
            "type": 'GET'
        });
    };
})();